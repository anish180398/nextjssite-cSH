'use client'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { ContentfulAsset } from "@/lib/contentful";
import { ExternalLink, FileText, Quote } from "lucide-react";

interface RichTextProps {
  document: Document;
  className?: string;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 text-lg leading-relaxed text-foreground/90">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="font-display mb-8 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="font-display mb-7 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="font-display mb-6 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="font-display mb-5 text-xl font-semibold text-foreground md:text-2xl">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="font-display mb-4 text-lg font-semibold text-foreground md:text-xl">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="font-display mb-4 text-base font-semibold text-foreground md:text-lg">
        {children}
      </h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <div className="mb-8">
        <ul className="space-y-3">{children}</ul>
      </div>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <div className="mb-8">
        <ol className="space-y-3">{children}</ol>
      </div>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="flex items-start gap-3 leading-relaxed text-foreground/90">
        <div className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        <span>{children}</span>
      </li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <div className="relative my-10 rounded-2xl border border-border bg-card p-8 pl-9">
        <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-primary" />
        <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
        <blockquote className="relative text-lg leading-relaxed font-medium text-foreground/90 italic">
          {children}
        </blockquote>
      </div>
    ),
    [BLOCKS.HR]: () => (
      <div className="my-12 flex justify-center">
        <div className="h-1 w-32 rounded-full bg-border" />
      </div>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = node.data.target as ContentfulAsset;
      if (!asset?.fields?.file) return null;

      const { url, details } = asset.fields.file;
      const title = asset.fields.title || 'Image';

      if (details.image) {
        return (
          <figure className="relative my-12">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={`https:${url}`}
                alt={title}
                width={details.image.width}
                height={details.image.height}
                className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            {title && (
              <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                {title}
              </figcaption>
            )}
          </figure>
        );
      }

      return (
        <div className="relative my-8">
          <a
            href={`https:${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <span className="font-semibold text-foreground">{title}</span>
              <div className="mt-1 text-sm text-muted-foreground">Click to download</div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
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
            className="group inline-flex items-center gap-1 font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/60"
          >
            <span>{children}</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        );
      }

      return (
        <Link
          href={uri}
          className="font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/60"
        >
          {children}
        </Link>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
      return (
        <Link
          href={`/${node.data.target.fields.slug}`}
          className="font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/60"
        >
          {children}
        </Link>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => (
      <strong className="font-bold text-foreground">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: any) => (
      <em className="text-foreground/95 italic">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text: any) => (
      <u className="text-foreground underline decoration-primary/60 decoration-2 underline-offset-2">
        {text}
      </u>
    ),
    [MARKS.CODE]: (text: any) => (
      <code className="mx-1 rounded-lg border border-border bg-muted px-3 py-1.5 font-mono text-sm text-primary">
        {text}
      </code>
    ),
  },
};

export default function RichText({ document, className = "" }: RichTextProps) {
  if (!document) return null;

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <div className="rich-text-content space-y-6">
        {documentToReactComponents(document, renderOptions)}
      </div>

      <style jsx global>{`
        .rich-text-content ol {
          counter-reset: list-counter;
        }
        .rich-text-content ol li {
          counter-increment: list-counter;
          position: relative;
        }
        .rich-text-content ol li::before {
          content: counter(list-counter);
          position: absolute;
          left: -2rem;
          top: 0.125rem;
          width: 1.5rem;
          height: 1.5rem;
          background: var(--primary);
          color: var(--primary-foreground);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
