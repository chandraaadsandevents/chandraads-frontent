import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Chandraa Ads - Advertising Solutions",
  description = "Full-service advertising agency with 24 years of experience in TV, satellite, press media, magazines, theaters, FM channels, and digital advertising.",
  keywords = "advertising agency, brand promotion, marketing solutions, TV advertising, digital marketing, print media, FM radio, outdoor advertising",
  canonical = "",
  ogImage = "/ChandraaAddsMedia/logo.svg",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const siteTitle = "Chandraa Ads";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const siteUrl = "https://www.chandraaads.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Chandraa Ads" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Chandraa Ads" />
      <meta name="copyright" content="Chandraa Ads" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Chandraa Ads",
          "url": siteUrl,
          "logo": `${siteUrl}/ChandraaAddsMedia/logo.svg`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Street, Sivananda Colony, Tatabad",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "postalCode": "641012",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9994272027",
            "contactType": "Customer Service",
            "email": "chandraaads1@gmail.com"
          },
          "sameAs": [
            "https://www.instagram.com/chandraa_ads/",
            "https://www.facebook.com/chandraaads",
            "https://twitter.com/chandraaads",
            "https://www.linkedin.com/company/chandraaads",
            "https://www.youtube.com/c/chandraaads"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;