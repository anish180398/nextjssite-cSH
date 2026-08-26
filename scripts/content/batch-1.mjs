import { doc, p, h2, ul } from "../lib/rich-text.mjs";

export const posts = [
  {
    title: "Why Shoppers Abandon Their Carts (And What Actually Gets Them to Finish)",
    slug: "cart-abandonment-checkout-fixes",
    excerpt:
      "Most cart abandonment isn't about price. It's about friction, uncertainty, and a checkout flow that asks for too much before it earns any trust. Here's what we look at first.",
    tags: ["E-commerce", "Retail", "Conversion"],
    kicker: "Industry \u00b7 E-commerce & Retail",
    motif: "ascend",
    body: doc(
      h2("The abandonment rate everyone quotes, and why it's misleading"),
      p("Most e-commerce dashboards report cart abandonment somewhere between 60-80%, and the number gets treated as a fixed cost of doing business online. It isn't. A large share of that number is unavoidable window-shopping and price comparison. But a meaningful chunk of it is self-inflicted: checkout flows that ask for an account before anything else, shipping costs that appear on the last step, or forms that don't work correctly on a phone."),
      h2("Where the friction actually lives"),
      p("When we audit a checkout flow, we're rarely looking at the \u201cabandon\u201d button. We're looking at the step right before it. Forced account creation is still one of the most common blockers we find \u2014 a shopper who's ready to buy gets stopped by a password field. Shipping and tax costs revealed only at the final step is another: the moment a total jumps unexpectedly, trust drops with it. And on mobile, a form that scrolls awkwardly or a payment field that doesn't trigger the right keyboard is often enough to make someone give up on an otherwise-completed purchase."),
      h2("What we build instead"),
      ul([
        "Guest checkout as the default path, with account creation offered after the order completes, not before",
        "Shipping estimates shown as early as the product page, not held back for a surprise at the end",
        "A clearly-progressed checkout flow with a visible step count, so shoppers know exactly how close they are to done",
        "Real-time validation on payment and address fields, so errors surface immediately instead of after a failed submit",
        "Saved payment and address details for returning customers, so a second purchase takes seconds, not minutes",
      ]),
      h2("Recovery is not the same as prevention"),
      p("Abandoned-cart email flows have their place, but they're a recovery mechanism for a problem that already happened. The more durable fix is removing the friction that caused the abandonment in the first place \u2014 and that's a checkout and information-architecture problem, not a marketing one. When we take on e-commerce work, we start by watching real users go through the existing flow before changing a single line of code, because the actual point of drop-off is rarely where a client assumes it is.")
    ),
  },
  {
    title: "Compliance Doesn't Have to Slow Down Your Fintech Roadmap",
    slug: "fintech-compliance-without-slowing-down",
    excerpt:
      "PCI-DSS and SOC 2 get treated as a wall between engineering and shipping. Built in from the start, they're closer to a checklist than a roadblock.",
    tags: ["FinTech", "Compliance", "Engineering"],
    kicker: "Industry \u00b7 FinTech & Banking",
    motif: "breach",
    body: doc(
      h2("The trap: treating compliance as a phase"),
      p("A lot of fintech teams handle compliance the same way they handle security \u2014 as a review that happens right before launch, done by a separate team, against a product that was built without it in mind. That's the version of compliance that actually slows things down, because by the time PCI-DSS or SOC 2 requirements get applied, half of them require re-architecting something that already shipped."),
      h2("What changes when compliance is a constraint, not a gate"),
      p("The teams that move fastest on regulated products treat compliance requirements the same way they treat any other technical constraint \u2014 decided at design time, not bolted on afterward. Card data never touching your own servers, through tokenization from a PCI-compliant processor, is a decision made in the first architecture diagram, not a fix requested during an audit. Access logging, encryption at rest, and least-privilege access to production data are default configuration, not a sprint added later."),
      h2("Where the real slowdowns come from"),
      ul([
        "Storing more sensitive data than the product actually needs, which multiplies audit scope for no product benefit",
        "Manual access reviews instead of automated, logged, role-based access from the start",
        "A single shared environment for staging and production, which turns every compliance question into a production question",
        "No clear data-retention policy, so \u201cwhat do we do with old records\u201d becomes a legal question instead of a config value",
      ]),
      h2("How we approach it"),
      p("On regulated builds, we treat the relevant framework \u2014 PCI-DSS, SOC 2, or both \u2014 as a set of architectural requirements gathered during discovery, not a checklist reviewed at the end. That means fewer surprises during an actual audit, and, just as importantly, an engineering team that isn't afraid to ship, because the guardrails are already built in rather than waiting to be enforced.")
    ),
  },
  {
    title: "The Real Cost of a Missed Appointment (And How Clinics Are Cutting No-Shows)",
    slug: "reducing-patient-no-shows-healthcare",
    excerpt:
      "A missed appointment isn't just an empty slot. It's lost revenue, a delayed patient, and a scheduling system working against the people it's supposed to help.",
    tags: ["Healthcare", "Product", "Engineering"],
    kicker: "Industry \u00b7 Healthcare",
    motif: "network",
    body: doc(
      h2("An empty slot costs more than it looks like"),
      p("Industry estimates commonly put no-show rates for outpatient clinics somewhere between 15-30%, and each missed slot doesn't just sit empty \u2014 it's provider time that was already allocated, a patient whose care got delayed, and a scheduling gap that's often too late to fill with same-day demand. Multiply that across a busy practice and it becomes one of the largest quiet revenue leaks in healthcare operations."),
      h2("Reminders alone aren't the fix"),
      p("Most practice management systems already send a reminder text or email. If that were enough, no-show rates would already be low. The gap is usually somewhere else: a booking flow that made scheduling easy but rescheduling hard, no clear way to cancel without calling during business hours, or a reminder that arrives with no way to confirm, reschedule, or cancel directly from it."),
      h2("What actually moves the number"),
      ul([
        "Two-way reminders \u2014 a text a patient can reply to directly to confirm or request a new time, not a one-way notice",
        "Self-service rescheduling that doesn't require a phone call during office hours",
        "Waitlist automation that offers a cancelled slot to the next patient automatically, instead of leaving it empty",
        "Clear, itemized appointment details \u2014 what to bring, how long it takes, where to park \u2014 that reduce anxiety-driven cancellations, not just forgetful ones",
        "Pattern tracking that flags patients with a history of no-shows for a different outreach approach, rather than treating every patient identically",
      ]),
      h2("Where this fits into a bigger system"),
      p("None of this works well as a bolt-on feature inside software that wasn't built to support it. The clinics that get this right treat scheduling as a core product surface, not an administrative afterthought, and build the rest of the patient communication flow around it. That's the kind of integration work we do when a healthcare client comes to us with \u201cour no-show rate is a problem\u201d instead of a fully-specified feature list \u2014 the fix is usually in the workflow, not just the interface.")
    ),
  },
  {
    title: "Your React Bundle Didn't Get Big Overnight",
    slug: "react-bundle-size-creep",
    excerpt:
      "Nobody adds 400kb of JavaScript in one commit. Bundle bloat is death by a thousand small, reasonable-looking decisions \u2014 here's how to find and reverse them.",
    tags: ["React", "Performance", "Engineering"],
    kicker: "Technology \u00b7 React",
    motif: "calibration",
    body: doc(
      h2("It's never one big mistake"),
      p("When a client comes to us with \u201cthe app feels slow,\u201d the bundle analyzer almost never reveals a single obvious culprit. It's a date-picker library imported for one form field, a charting library pulled in for a single dashboard widget, an icon package imported in full instead of per-icon, and a utility library where three functions are used out of the whole default import. Each decision was reasonable in isolation. Together, they add up to a bundle that loads slowly on a real network, on a real phone."),
      h2("Where to actually look"),
      ul([
        "Run a bundle analyzer before guessing \u2014 assumptions about what's \u201cprobably big\u201d are wrong more often than not",
        "Check for duplicate dependencies at different versions, which happens quietly in larger codebases with many contributors",
        "Look for full-library imports where only a few functions or components are actually used",
        "Confirm code-splitting is actually happening at route boundaries, not just configured and forgotten",
      ]),
      h2("Fixes that compound"),
      p("Swapping a heavy date library for a lighter one, converting a full icon-package import to individual icon imports, and lazy-loading anything below the fold \u2014 modals, charts, rich editors \u2014 each look like small wins individually. In practice they compound: a bundle audit that finds five of these fixes at once often cuts initial load significantly without a single feature being removed."),
      h2("The part that's easy to skip"),
      p("The hardest part isn't finding the fixes, it's stopping the bundle from creeping back up next quarter. That means bundle-size budgets checked in CI, not a one-time cleanup that quietly erodes over the next six months of feature work. When we take over performance work on an existing React codebase, the CI check is usually the first thing we add \u2014 not the last.")
    ),
  },
  {
    title: "The SEO Regression Nobody Notices Until Traffic Is Already Gone",
    slug: "seo-regressions-after-csr-migration",
    excerpt:
      "A move to a faster-feeling client-rendered app can quietly cost you the organic traffic that took years to earn. Here's the gap that usually causes it.",
    tags: ["Next.js", "SEO", "Engineering"],
    kicker: "Technology \u00b7 Next.js",
    motif: "network",
    body: doc(
      h2("The migration that feels like a win"),
      p("A team ships a rebuild \u2014 often moving toward a more modern, more interactive client-side architecture \u2014 and every internal metric looks better. Interactions feel instant. The demo is impressive. Then, weeks later, organic search traffic has quietly dropped, and nobody connects it back to the rebuild because the site \u201clooks fine\u201d when anyone on the team opens it in a browser."),
      h2("Why it looks fine and isn't"),
      p("The site looks fine to a person because a person's browser executes JavaScript. Search crawlers are increasingly capable of rendering JS too, but rendering is deferred, rate-limited, and inconsistent in ways a real user's browser is not. A page that depended entirely on client-side data fetching for its core content \u2014 the actual product description, the actual article body \u2014 is a bet that a crawler will render it correctly, on time, every time. That bet doesn't always pay off, and when it doesn't, the page gets indexed with next to nothing in it."),
      h2("What we check first after a migration"),
      ul([
        "Whether primary content is present in the initial server-rendered HTML, not just after client hydration",
        "Whether metadata \u2014 title, description, canonical tags, Open Graph data \u2014 is generated per-page on the server, not injected client-side after mount",
        "Whether URLs and slugs were preserved 1:1, since a rebuild is a common, quiet source of accidental 404s on previously-ranked pages",
        "Whether internal linking structure survived the rebuild, since crawl depth and link equity reset more easily than teams expect",
      ]),
      h2("The Next.js-specific fix"),
      p("This is exactly the gap Next.js's App Router is built to close \u2014 Server Components and server-side rendering mean the crawler and the user get the same fully-rendered HTML on the first request, with client-side interactivity layered on top rather than substituted in. When we migrate a client to Next.js, SEO parity against the old site is a launch requirement we verify before go-live, not a metric we check afterward and hope holds up.")
    ),
  },
  {
    title: "The Bugs TypeScript Would Have Caught Last Tuesday",
    slug: "runtime-errors-untyped-javascript",
    excerpt:
      "Every untyped JavaScript codebase eventually ships the same category of bug: a value that was undefined in a place the code assumed it couldn't be.",
    tags: ["TypeScript", "Engineering", "Code Quality"],
    kicker: "Technology \u00b7 TypeScript",
    motif: "breach",
    body: doc(
      h2("The bug report that's always the same shape"),
      p("\u201cIt works most of the time, but sometimes it crashes\u201d is one of the most common bug reports in a growing JavaScript codebase, and it's almost always the same root cause wearing a different disguise: a function assumed an object had a field that, under some condition nobody tested, it didn't. An API response changed shape slightly. A prop was optional somewhere and required somewhere else. None of these are exotic bugs \u2014 they're exactly the class of error a type system exists to catch before the code ships."),
      h2("Why teams delay adopting it"),
      p("The usual objection is migration cost, and it's a fair one for a codebase with real production traffic. Nobody wants to pause feature work for a rewrite. The good news is that a full rewrite is not actually how a realistic TypeScript migration goes \u2014 incremental adoption lets a codebase convert file by file, with an explicit, visible escape hatch for the parts not converted yet, rather than an all-or-nothing cutover."),
      h2("What incremental adoption actually looks like"),
      ul([
        "Turn on TypeScript checking against existing JS files first, catching type errors without converting anything yet",
        "Convert new files and heavily-modified files as you touch them, rather than scheduling a dedicated migration sprint",
        "Type the boundaries first \u2014 API responses, form inputs, database models \u2014 since that's where the highest-value, highest-frequency bugs live",
        "Turn on strict mode last, once the bulk of the codebase is typed, rather than fighting it from day one",
      ]),
      h2("The part beyond bug prevention"),
      p("The less-discussed benefit is onboarding. A typed codebase tells a new engineer what a function expects and returns without needing to trace through five other files or ask around. When we inherit an existing JavaScript codebase from a client, an incremental TypeScript migration is often one of the first things we propose \u2014 not because it's exciting work, but because it measurably reduces the number of \u201chow does this even work\u201d questions in the following months.")
    ),
  },
  {
    title: "Nobody Owns Your AWS Bill, So It Just Keeps Growing",
    slug: "aws-cloud-cost-ownership",
    excerpt:
      "Cloud costs rarely spike from one bad decision. They drift upward from a dozen resources nobody remembers provisioning and nobody's job it is to review.",
    tags: ["AWS", "Cloud", "Engineering"],
    kicker: "Technology \u00b7 AWS",
    motif: "calibration",
    body: doc(
      h2("The bill that grows without a villain"),
      p("When a client asks us to look at a growing AWS bill, we're rarely looking for a single wasteful resource. We're looking at a dev environment that mirrors production sizing, a database instance sized for a traffic spike that happened once and was never scaled back down, log retention set to keep everything indefinitely by default, and a few abandoned resources still running from a project that shipped and moved on without a teardown step."),
      h2("Why this happens on every team, not just disorganized ones"),
      p("Cloud infrastructure makes provisioning easy and deprovisioning invisible. Spinning up a new resource takes one command and shows up immediately in a sprint demo. Turning it off later requires someone to remember it exists, decide it's safe to remove, and actually do it \u2014 a task with no natural trigger and no one's name attached to it. That asymmetry is the actual root cause behind almost every surprisingly large cloud bill, far more often than any single wasteful decision."),
      h2("What a real cost review looks for"),
      ul([
        "Right-sizing: instances provisioned for peak load that sit idle at a fraction of capacity the rest of the time",
        "Orphaned resources: storage volumes, snapshots, and load balancers left behind after the instance that used them was terminated",
        "Data transfer costs, one of the most commonly underestimated line items until a bill makes them impossible to ignore",
        "Reserved or savings-plan pricing left unused on workloads stable enough to qualify, running instead at full on-demand rates",
      ]),
      h2("Making it someone's job"),
      p("The actual fix isn't a one-time audit \u2014 it's assigning clear architectural ownership so infrastructure decisions get reviewed on a cadence, the same way code does. When we take on infrastructure work, one of the first deliverables is usually a cost and ownership map: what's running, why it's sized the way it is, and who signs off the next time something new gets provisioned.")
    ),
  },
  {
    title: "A Beautiful Website Is Not the Same as a Working One",
    slug: "websites-that-dont-convert",
    excerpt:
      "Good visual design and a working conversion funnel are two different disciplines. A site can succeed at one and quietly fail at the other.",
    tags: ["Web Development", "Conversion", "Strategy"],
    kicker: "Service \u00b7 Web Development",
    motif: "ascend",
    body: doc(
      h2("Two different jobs, one deliverable"),
      p("A marketing site has two jobs that don't automatically come as a pair: look credible enough that a visitor trusts the business, and make the next action \u2014 a form, a call, a purchase \u2014 obvious and easy to take. Most agencies are good at the first job. Fewer are equally rigorous about the second, and the gap between them is where a lot of otherwise well-designed sites quietly underperform."),
      h2("What \u201cdoesn't convert\u201d usually looks like up close"),
      ul([
        "The primary call-to-action changes wording, color, or position across different pages, so a visitor never builds a consistent expectation of what to do next",
        "Contact and quote forms ask for more information than the business actually needs at that stage, which measurably reduces completion",
        "Page load speed is treated as a technical metric instead of a conversion one, even though a slow first load is one of the most reliable ways to lose a visitor before they see anything",
        "Mobile layouts are a shrunk version of the desktop design rather than a deliberately reconsidered flow, even though mobile is the majority of traffic for most businesses today",
      ]),
      h2("How we approach a rebuild"),
      p("Before we touch visual design, we map the actual funnel: what does a visitor need to believe, see, and be asked to do, in what order, to become a lead or a customer. The visual design gets built around that map, not the other way around. That's also why a redesign we ship comes with conversion tracking wired in from day one \u2014 whether the new site actually works better needs to be answerable with data, not a subjective impression a few weeks after launch.")
    ),
  },
  {
    title: "Traffic Is Not the Problem. Your Flow Is.",
    slug: "high-traffic-low-conversion-ux",
    excerpt:
      "A healthy amount of traffic with a disappointing conversion rate usually isn't a marketing problem. It's usually a UX problem hiding behind a marketing dashboard.",
    tags: ["UX Design", "Conversion", "Product"],
    kicker: "Service \u00b7 UI/UX Design",
    motif: "network",
    body: doc(
      h2("The instinct to blame the top of the funnel"),
      p("When conversion is disappointing, the first instinct is often to look at traffic quality \u2014 are we getting the right visitors, from the right channels, with the right intent. Sometimes that's the real issue. More often, when we actually watch session recordings and run a usability pass, the visitors were exactly the right audience, and they left because the experience lost them somewhere in the middle of the flow."),
      h2("Where flows quietly lose people"),
      ul([
        "Too many decisions asked at once \u2014 a form or flow that front-loads every question instead of progressively disclosing what's needed next",
        "Unclear next steps \u2014 a page that looks finished but doesn't make it obvious what to click, especially right after a purchase or signup completes",
        "Inconsistent patterns across the product, so a visitor has to re-learn navigation on every new screen instead of applying what they already figured out",
        "Missing feedback \u2014 an action with no visible confirmation, leaving a visitor unsure if anything happened at all",
      ]),
      h2("How this gets diagnosed properly"),
      p("Traffic dashboards tell you where visitors came from and where they left. They don't tell you why. That \u201cwhy\u201d comes from session recordings, real usability testing with a handful of representative users, and a straightforward heuristic review against established usability principles \u2014 three different lenses on the same flow, because any one of them alone tends to miss something the others catch."),
      h2("Fixing the flow, not just the landing page"),
      p("It's tempting to treat the landing page as the whole problem, since it's the easiest thing to redesign in isolation. In practice, conversion usually breaks somewhere past the landing page \u2014 inside the form, the checkout, or the onboarding \u2014 which is why our UX engagements almost always look at the full flow end to end, not just the page a visitor happens to land on first.")
    ),
  },
  {
    title: "Ranking First and Still Losing: The Gap Between SEO and Revenue",
    slug: "seo-ranking-without-conversion",
    excerpt:
      "Rank #1 for the right keyword and get nothing from it. It happens more often than most SEO reporting admits, and the cause is rarely the ranking itself.",
    tags: ["SEO", "Digital Marketing", "Strategy"],
    kicker: "Service \u00b7 SEO & Digital Marketing",
    motif: "ascend",
    body: doc(
      h2("A ranking is not a business outcome"),
      p("SEO reporting tends to stop at the metric that's easiest to show progress on: position. Rank #1 for a relevant keyword looks like unambiguous success in a monthly report. But rank and revenue are only loosely correlated, and a business can climb to the top of a results page while its actual lead or sales numbers stay completely flat \u2014 a gap that's uncomfortable to explain if the reporting never measured anything past position in the first place."),
      h2("Where the gap usually comes from"),
      ul([
        "Keyword-intent mismatch: ranking for a term that gets searched a lot but doesn't represent someone ready to buy or contact a business",
        "A landing page built to rank rather than to convert, dense with keyword-targeted content but thin on the actual next step",
        "Page experience issues \u2014 slow load, intrusive layout shifts, poor mobile usability \u2014 that undo the trust a high ranking is supposed to signal",
        "No tracking connecting organic traffic through to actual leads or revenue, so the disconnect stays invisible until someone asks the right question",
      ]),
      h2("Reporting on the metric that matters"),
      p("The fix starts with reporting differently, not just optimizing differently. Position should be a leading indicator on the way to a report on organic-driven leads, calls, or sales \u2014 not the final line. Once that visibility exists, it usually becomes obvious whether the content strategy is actually targeting commercial intent or just chasing search volume."),
      h2("How we run SEO engagements"),
      p("We tie every keyword target back to a business outcome before writing a page for it, and we build conversion tracking into the SEO work itself rather than treating it as a separate analytics project. Ranking is the visible part of the work. Whether it's connected to revenue is the part we actually get held accountable for.")
    ),
  },
];
