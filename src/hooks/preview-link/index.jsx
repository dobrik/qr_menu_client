"use client";

import { usePathname } from "next/navigation";

/**
 * Parses pathname expecting format: /{locale}/{maybePreview}/...
 * locale - always 2 letters (ru, en, uk)
 */

export function usePrefixedLink() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const locale = segments[0] || "";

  const hasPreview = segments[1] === "preview";

  function prefixedLink(href) {
    const hrefSegments = href.split("/").filter(Boolean);

    if (hrefSegments[0] === locale) {
      hrefSegments.shift();
    }

    if (hrefSegments[0] === "preview") {
      hrefSegments.shift();
    }

    let newPath = `/${locale}`;
    if (hasPreview) {
      newPath += `/preview`;
    }
    if (hrefSegments.length > 0) {
      newPath += `/${hrefSegments.join("/")}`;
    }

    return newPath;
  }

  return { prefixedLink, locale, hasPreview };
}