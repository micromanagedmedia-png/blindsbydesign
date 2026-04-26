import React from 'react';
import { Link as RouterLink, LinkProps } from "react-router";

export default function HoverLink({ to, children, onMouseEnter, ...props }: LinkProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const path = typeof to === 'string' ? to : to.pathname;
    
    // Modern Speculative Loading API for crawlers and modern browsers
    if (path && typeof window !== 'undefined' && HTMLScriptElement.supports?.('speculationrules')) {
      if (!document.querySelector(`script[data-prefetch="${path}"]`)) {
        const script = document.createElement('script');
        script.type = 'speculationrules';
        script.setAttribute('data-prefetch', path);
        const rules = {
          prerender: [{
            source: 'list',
            urls: [path]
          }]
        };
        script.textContent = JSON.stringify(rules);
        document.head.appendChild(script);
      }
    }
    
    // Fallback standard prefetch
    if (path && typeof window !== 'undefined') {
       if (!document.querySelector(`link[rel="prefetch"][href="${path}"]`)) {
          const link = document.createElement("link");
          link.rel = "prefetch";
          link.href = path;
          document.head.appendChild(link);
       }
    }

    if (onMouseEnter) onMouseEnter(e);
  };

  // Preload code splitting chunks immediately on hover
  // (In a dynamically imported setup, we would trigger the import() here too)

  return (
    <RouterLink to={to} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </RouterLink>
  );
}
