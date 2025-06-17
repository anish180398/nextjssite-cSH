import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { ContentfulAsset } from "@/lib/contentful";

interface RichTextProps {
  document: Document;
  className?: string;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-semibold mb-5 text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-xl font-semibold mb-3 text-gray-900">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-lg font-semibold mb-3 text-gray-900">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-base font-semibold mb-3 text-gray-900">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-gray-700 leading-relaxed">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-2 mb-4 italic text-gray-600 bg-gray-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-300" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = node.data.target as ContentfulAsset;
      if (!asset?.fields?.file) return null;

      const { url, details } = asset.fields.file;
      const title = asset.fields.title || 'Image';

      if (details.image) {
        return (
          <div className="my-8">
            <Image
              src={`https:${url}`}
              alt={title}
              width={details.image.width}
              height={details.image.height}
              className="rounded-lg shadow-md w-full h-auto"
              loading="lazy"
            />
            {title && (
              <p className="text-sm text-gray-600 text-center mt-2 italic">
                {title}
              </p>
            )}
          </div>
        );
      }

      return (
        <div className="my-4 p-4 border border-gray-200 rounded-lg">
          <a
            href={`https:${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            📎 {title}
          </a>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      const { uri } = node.data;
      const isExternal = uri.startsWith('http');
      
      if (isExternal) {
        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={uri}
          className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
        >
          {children}
        </Link>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
      // Handle internal entry links
      return (
        <Link
          href={`/${node.data.target.fields.slug}`}
          className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text: any) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {text}
      </code>
    ),
  },
};

export default function RichText({ document, className = "" }: RichTextProps) {
  if (!document) return null;

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {documentToReactComponents(document, renderOptions)}
    </div>
  );
} 