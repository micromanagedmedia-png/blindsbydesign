import { Helmet } from "react-helmet-async";

interface SEOHeaderProps {
  title: string;
  description: string;
  type?: string;
  url?: string;
}

export default function SEOHeader({ title, description, type = "WebSite", url = "https://blinds-shutters-shades-portland.cmsfly.com" }: SEOHeaderProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Blinds by Design",
    "image": "https://blinds-shutters-shades-portland.cmsfly.com/logo.png",
    "@id": "https://blinds-shutters-shades-portland.cmsfly.com",
    "url": "https://blinds-shutters-shades-portland.cmsfly.com",
    "telephone": "207-501-2800",
    "founder": {
      "@type": "Person",
      "name": "Phillip McKinnis"
    },
    "description": "50 Years of Experience. Family-Owned Custom Window Treatments in Portland, ME.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "184 Main St",
        "addressLocality": "Portland",
        "addressRegion": "ME",
        "postalCode": "04106",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "182 ME-3",
        "addressLocality": "China",
        "addressRegion": "ME",
        "postalCode": "04358",
        "addressCountry": "US"
      }
    ],
    "areaServed": ["Portland, ME", "South Portland, ME", "Augusta, ME", "Brunswick, ME", "Scarborough, ME"],
    "sameAs": []
  };

  return (
    <Helmet>
      <title>{title} | Blinds by Design Portland ME</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
