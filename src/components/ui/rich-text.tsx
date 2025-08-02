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
      <p className="mb-6 text-brand-white/90 leading-relaxed text-lg drop-shadow-sm">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
        <span className="bg-gradient-to-r from-brand-white via-brand-white to-brand-violet bg-clip-text text-transparent drop-shadow-2xl">
          {children}
        </span>
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl md:text-4xl font-bold mb-7 leading-tight">
        <span className="bg-gradient-to-r from-brand-violet to-brand-orange bg-clip-text text-transparent drop-shadow-xl">
          {children}
        </span>
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
        <span className="bg-gradient-to-r from-brand-orange to-brand-violet bg-clip-text text-transparent drop-shadow-lg">
          {children}
        </span>
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-xl md:text-2xl font-bold mb-5 text-brand-white drop-shadow-lg">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-lg md:text-xl font-bold mb-4 text-brand-white drop-shadow-lg">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-base md:text-lg font-bold mb-4 text-brand-white drop-shadow-lg">
        {children}
      </h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <div className="mb-8">
        <ul className="space-y-3">
          {children}
        </ul>
      </div>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <div className="mb-8">
        <ol className="space-y-3">
          {children}
        </ol>
      </div>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="flex items-start space-x-3 text-brand-white/90 leading-relaxed">
        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-brand-violet to-brand-orange rounded-full mt-3"></div>
        <span className="drop-shadow-sm">{children}</span>
      </li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <div className="relative my-10">
        <div className="relative p-8 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-violet/10">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-2xl blur-lg"></div>
          <div className="absolute inset-0 border-l-4 border-gradient-to-b border-brand-violet rounded-2xl"></div>
          
          {/* Quote icon */}
          <div className="absolute top-6 right-6 opacity-20">
            <Quote className="w-12 h-12 text-brand-violet drop-shadow-lg" />
          </div>
          
          {/* 3D depth shadow */}
          <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-3 translate-y-3 blur-lg -z-10"></div>
          
          <blockquote className="relative z-10 text-brand-white/90 text-lg leading-relaxed italic font-medium drop-shadow-lg">
            {children}
          </blockquote>
        </div>
      </div>
    ),
    [BLOCKS.HR]: () => (
      <div className="my-12 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-brand-violet via-brand-orange to-brand-violet rounded-full opacity-60"></div>
      </div>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = node.data.target as ContentfulAsset;
      if (!asset?.fields?.file) return null;

      const { url, details } = asset.fields.file;
      const title = asset.fields.title || 'Image';

      if (details.image) {
        return (
          <div className="relative my-12 group">
            <div className="relative transform-gpu transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-violet/20 via-brand-orange/10 to-brand-violet/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-4 translate-y-4 blur-lg"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-white/10 bg-gradient-to-br from-brand-dark via-slate-800 to-brand-dark shadow-2xl">
                <Image
                  src={`https:${url}`}
                  alt={title}
                  width={details.image.width}
                  height={details.image.height}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {title && (
              <div className="text-center mt-6">
                <p className="text-brand-white/70 text-base leading-relaxed drop-shadow-sm italic px-4 py-2 bg-gradient-to-r from-brand-dark/60 to-brand-dark/40 rounded-xl border border-brand-white/10 backdrop-blur-sm inline-block">
                  {title}
                </p>
              </div>
            )}
          </div>
        );
      }

      return (
        <div className="relative my-8">
          <div className="relative p-6 bg-gradient-to-br from-brand-dark/80 via-slate-800/60 to-brand-dark/80 border border-brand-white/10 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-violet/10 hover:shadow-brand-violet/20 transition-all duration-300 group">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 via-transparent to-brand-orange/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* 3D depth shadow */}
            <div className="absolute inset-0 bg-brand-dark/40 rounded-2xl transform translate-x-2 translate-y-2 blur-lg -z-10"></div>
            
            <a
              href={`https:${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center space-x-4 text-brand-white hover:text-brand-violet transition-colors duration-300 group/link"
            >
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-brand-violet/25 to-brand-orange/15 rounded-xl group-hover/link:scale-110 transition-transform duration-300 shadow-lg shadow-brand-violet/20">
                <FileText className="w-6 h-6 text-brand-violet drop-shadow-lg" />
              </div>
              <div className="flex-1">
                <span className="font-semibold drop-shadow-lg">{title}</span>
                <div className="text-sm text-brand-white/70 mt-1 drop-shadow-sm">Click to download</div>
              </div>
              <ExternalLink className="w-5 h-5 text-brand-violet/70 group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
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
            className="group inline-flex items-center gap-1 text-brand-violet hover:text-brand-orange transition-all duration-300 font-semibold drop-shadow-lg hover:drop-shadow-xl underline decoration-brand-violet/50 hover:decoration-brand-orange/70 decoration-2 underline-offset-4"
          >
            <span>{children}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        );
      }

      return (
        <Link
          href={uri}
          className="text-brand-violet hover:text-brand-orange transition-all duration-300 font-semibold drop-shadow-lg hover:drop-shadow-xl underline decoration-brand-violet/50 hover:decoration-brand-orange/70 decoration-2 underline-offset-4"
        >
          {children}
        </Link>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
      return (
        <Link
          href={`/${node.data.target.fields.slug}`}
          className="text-brand-violet hover:text-brand-orange transition-all duration-300 font-semibold drop-shadow-lg hover:drop-shadow-xl underline decoration-brand-violet/50 hover:decoration-brand-orange/70 decoration-2 underline-offset-4"
        >
          {children}
        </Link>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => (
      <strong className="font-bold text-brand-white drop-shadow-lg">
        {text}
      </strong>
    ),
    [MARKS.ITALIC]: (text: any) => (
      <em className="italic text-brand-white/95 drop-shadow-sm">
        {text}
      </em>
    ),
    [MARKS.UNDERLINE]: (text: any) => (
      <u className="underline decoration-brand-violet/70 decoration-2 underline-offset-2 text-brand-white drop-shadow-sm">
        {text}
      </u>
    ),
    [MARKS.CODE]: (text: any) => (
      <code className="relative inline-flex items-center px-3 py-1.5 mx-1 bg-gradient-to-r from-brand-dark/80 to-slate-800/60 border border-brand-white/20 rounded-lg text-sm font-mono text-brand-violet backdrop-blur-sm shadow-lg shadow-brand-dark/30 drop-shadow-lg">
        <span className="relative z-10">{text}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 to-brand-orange/5 rounded-lg blur-sm opacity-50"></div>
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
          background: linear-gradient(135deg, #8b5cf6, #f97316);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          box-shadow: 0 4px 6px -1px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
}
