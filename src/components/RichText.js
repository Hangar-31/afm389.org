/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
const linkStyle = css`
  text-decoration: underline;
`;

// Renders the small part of Markdown the CMS text fields allow: bold, italic
// and links. Everything else stays plain text.
function inline(text) {
  const clean = text.replace(/\\([\\`*_{}[\]()#+\-.!])/g, "$1");
  const nodes = [];
  let last = 0;
  clean.replace(TOKEN, (match, label, url, bold, italic, index) => {
    nodes.push(clean.slice(last, index));
    last = index + match.length;
    if (bold) nodes.push(<b key={index}>{bold}</b>);
    else if (italic) nodes.push(<i key={index}>{italic}</i>);
    else if (url.startsWith("/"))
      nodes.push(
        <Link key={index} css={linkStyle} to={url}>
          {label}
        </Link>
      );
    else
      nodes.push(
        <a key={index} css={linkStyle} href={url}>
          {label}
        </a>
      );
    return match;
  });
  nodes.push(clean.slice(last));
  return nodes;
}

/** One entry per paragraph, each ready to place inside a text element. */
export function richParagraphs(text) {
  return (text || "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => (
      <span key={paragraph}>{inline(paragraph.replace(/\s*\n\s*/g, " "))}</span>
    ));
}

/** The text as one run of inline content. */
export function richInline(text) {
  return <>{richParagraphs(text)}</>;
}

/** Splits plain text on blank lines. */
export function plainParagraphs(text) {
  return (text || "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}
