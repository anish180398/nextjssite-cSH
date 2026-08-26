// One-off admin script: creates + publishes the fine-tuning blog entry via
// the Contentful Management API. Not part of the site's runtime code.
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT = "master";
const CONTENT_TYPE = "blogs";

if (!SPACE_ID || !TOKEN) {
  console.error("Missing NEXT_PUBLIC_CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN in env.");
  process.exit(1);
}

const doc = (...content) => ({ nodeType: "document", data: {}, content });
const p = (text) => ({
  nodeType: "paragraph",
  data: {},
  content: [{ nodeType: "text", value: text, marks: [], data: {} }],
});
const h2 = (text) => ({
  nodeType: "heading-2",
  data: {},
  content: [{ nodeType: "text", value: text, marks: [], data: {} }],
});
const ul = (items) => ({
  nodeType: "unordered-list",
  data: {},
  content: items.map((text) => ({
    nodeType: "list-item",
    data: {},
    content: [{ nodeType: "paragraph", data: {}, content: [{ nodeType: "text", value: text, marks: [], data: {} }] }],
  })),
});

const title = "Before You Fine-Tune an LLM, Ask If You Even Need To";
const slug = "when-to-fine-tune-an-llm";
const excerpt =
  "Fine-tuning is the most expensive and least flexible way to change how a model behaves \u2014 and most teams reach for it before trying the cheaper options. Here's the order we actually work through with clients.";

const body = doc(
  p(
    "Almost every client conversation about \u201ccustomizing\u201d an AI feature starts with the word \u201cfine-tune.\u201d Most of those conversations end somewhere else \u2014 usually a better prompt, sometimes a retrieval layer, and only occasionally an actual training run. That order matters, because it's also the order of cost and flexibility, from cheapest and easiest to change, to most expensive and hardest to undo."
  ),
  h2("Three tools that solve three different problems"),
  p(
    "It helps to be precise about what each option actually changes, because they aren't interchangeable:"
  ),
  ul([
    "Prompt engineering changes the instructions. Fastest to test, free to change, and the right first move for almost anything that looks like a formatting or instruction-following problem.",
    "Retrieval (RAG) changes what the model knows, by pulling relevant documents in at request time. This is the fix for missing or changing knowledge \u2014 and it keeps facts current and citable, which fine-tuning never does.",
    "Fine-tuning changes how the model behaves, by adjusting its weights on examples of the behavior you want. It's the right tool only for entrenched style, format, or domain habits that prompting genuinely can't hold.",
  ]),
  p(
    "The single most common mistake we see is reaching for the third option to solve the second problem \u2014 fine-tuning a model on internal documentation to \u201cteach it the facts.\u201d That bakes today's knowledge into frozen weights. It goes stale the moment anything changes, and unlike a retrieval index, you can't patch it by updating a document."
  ),
  h2("When fine-tuning actually earns its cost"),
  p("Fine-tuning has a real, recurring bill: hosting the tuned model (or a premium on a hosted platform), on top of the one-time training run. That's only worth paying when:"),
  ul([
    "The task is high-volume and stable \u2014 the same narrow job, run enough times that a small per-request improvement adds up to real savings.",
    "Prompting has genuinely plateaued \u2014 you've tried and it still won't reliably hold the format, tone, or behavior you need.",
    "The win is measurable \u2014 fewer tokens per request, a meaningfully higher success rate, or a capability you can't reach any other way.",
  ]),
  p(
    "If your requirements are still shifting, or your volume is low, the training cost never really amortizes, and every requirement change means retraining. That's a sign to stay with prompting or retrieval."
  ),
  h2("If you do fine-tune, LoRA is almost always the right shape"),
  p(
    "Full fine-tuning updates every weight in the model, which is powerful and, for anything at frontier scale, impractical for most teams. Parameter-efficient methods like LoRA freeze the base model and train small adapter matrices instead \u2014 a fraction of a percent of the parameters \u2014 for most of the benefit at a fraction of the compute and memory. That's why the large majority of practical fine-tunes today are LoRA rather than full retrains."
  ),
  p(
    "Open-weights models have also changed the economics here. A model like Thinking Machines' Inkling ships specifically designed to be fine-tuned on infrastructure you control, which means you own the resulting artifact instead of renting a tuned result inside a vendor's platform on the vendor's terms."
  ),
  h2("Where fine-tuning projects actually go wrong"),
  ul([
    "Overfitting: too many epochs or too high a rank, and the model memorizes the training set instead of generalizing. Watch validation loss, not just training loss, and stop early.",
    "No real evaluation: judging results by feel, or by the same examples used in training. Both are misleading. A held-out test set with a fixed metric is the only honest read.",
    "Skipping the baseline: if you never measured how far prompting and retrieval alone got you, you can't actually prove the fine-tune bought anything.",
    "A messy dataset: quality beats volume by a wide margin \u2014 a few hundred clean, consistent examples outperform tens of thousands of noisy ones. Read a sample of your own training data before you trust it.",
  ]),
  h2("The takeaway"),
  p(
    "Fine-tuning isn't wrong, it's just usually premature. Work down the ladder \u2014 prompt, then retrieval, then fine-tuning \u2014 and stop at the first rung that actually solves the problem. When we scope AI features for clients, proving that the cheaper options fall short is part of the deliverable, not a step we skip on the way to a training run."
  )
);

async function main() {
  const createRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": CONTENT_TYPE,
      },
      body: JSON.stringify({
        fields: {
          title: { "en-US": title },
          slug: { "en-US": slug },
          excerpt: { "en-US": excerpt },
          body: { "en-US": body },
          author: { "en-US": "Kryttr" },
          publishedDate: { "en-US": new Date().toISOString() },
          tags: { "en-US": ["AI", "Machine Learning", "Engineering"] },
        },
      }),
    }
  );

  const created = await createRes.json();
  if (!createRes.ok) {
    console.error("CREATE FAILED:", JSON.stringify(created, null, 2));
    process.exit(1);
  }
  console.log("Created entry:", created.sys.id, "version:", created.sys.version);

  const publishRes = await fetch(
    `https://api.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${created.sys.id}/published`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "X-Contentful-Version": String(created.sys.version),
      },
    }
  );

  const published = await publishRes.json();
  if (!publishRes.ok) {
    console.error("PUBLISH FAILED:", JSON.stringify(published, null, 2));
    process.exit(1);
  }
  console.log("Published:", published.sys.id, "-> slug:", slug);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
