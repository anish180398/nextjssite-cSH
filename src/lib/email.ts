import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  subject?: string;
  formType?: string;
}

export interface NewsletterFormData {
  email: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const { name, email, company, phone, message, subject, formType } = data;

  // Check for required environment variables
  if (!process.env.SES_FROM_EMAIL || !process.env.SES_TO_EMAIL) {
    console.error("Missing SES email configuration:", {
      SES_FROM_EMAIL: !!process.env.SES_FROM_EMAIL,
      SES_TO_EMAIL: !!process.env.SES_TO_EMAIL
    });
    return false;
  }

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #731bdd 0%, #6a23c4 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #731bdd; display: block; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #731bdd; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #731bdd; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 New Contact Form Submission</h1>
            <p>Reign of Vision - Digital Agency</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Form Type:</span>
              <div class="value">${formType || 'Contact Form'}</div>
            </div>
            
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${email}</div>
            </div>
            
            ${company ? `
            <div class="field">
              <span class="label">Company:</span>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            ${phone ? `
            <div class="field">
              <span class="label">Phone:</span>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            
            ${subject ? `
            <div class="field">
              <span class="label">Subject:</span>
              <div class="value">${subject}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <span class="label">Message:</span>
              <div class="value">${message}</div>
            </div>
            
            <div class="footer">
              <p>📧 Reply to: ${email}</p>
              <p>🕒 Submitted: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
    New Contact Form Submission - Reign of Vision
    
    Form Type: ${formType || 'Contact Form'}
    Name: ${name}
    Email: ${email}
    ${company ? `Company: ${company}` : ''}
    ${phone ? `Phone: ${phone}` : ''}
    ${subject ? `Subject: ${subject}` : ''}
    
    Message:
    ${message}
    
    Reply to: ${email}
    Submitted: ${new Date().toLocaleString()}
  `;

  const params = {
    Source: process.env.SES_FROM_EMAIL!,
    Destination: {
      ToAddresses: [process.env.SES_TO_EMAIL!],
    },
    Message: {
      Subject: {
        Data: subject || `New Contact Form Submission from ${name}`,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: htmlContent,
          Charset: "UTF-8",
        },
        Text: {
          Data: textContent,
          Charset: "UTF-8",
        },
      },
    },
    ReplyToAddresses: [email],
  };

  try {
    console.log("Sending email with SES params:", {
      source: params.Source,
      destination: params.Destination.ToAddresses[0],
      subject: params.Message.Subject.Data,
      region: process.env.AWS_REGION || "us-east-1"
    });
    
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    console.log("SES send result:", result);
    return true;
  } catch (error: any) {
    console.error("Error sending email:", {
      message: error.message,
      code: error.code || error.name,
      statusCode: error.$metadata?.httpStatusCode,
      requestId: error.$metadata?.requestId,
      stack: error.stack
    });
    return false;
  }
}

export async function sendNewsletterEmail(data: NewsletterFormData): Promise<boolean> {
  const { email } = data;

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #731bdd 0%, #6a23c4 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #731bdd; display: block; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #731bdd; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #731bdd; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Newsletter Subscription</h1>
            <p>Reign of Vision - Digital Agency</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${email}</div>
            </div>
            
            <div class="footer">
              <p>🕒 Subscribed: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
    New Newsletter Subscription - Reign of Vision
    
    Email: ${email}
    Subscribed: ${new Date().toLocaleString()}
  `;

  const params = {
    Source: process.env.SES_FROM_EMAIL!,
    Destination: {
      ToAddresses: [process.env.SES_TO_EMAIL!],
    },
    Message: {
      Subject: {
        Data: `New Newsletter Subscription from ${email}`,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: htmlContent,
          Charset: "UTF-8",
        },
        Text: {
          Data: textContent,
          Charset: "UTF-8",
        },
      },
    },
    ReplyToAddresses: [email],
  };

  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return true;
  } catch (error) {
    console.error("Error sending newsletter email:", error);
    return false;
  }
} 