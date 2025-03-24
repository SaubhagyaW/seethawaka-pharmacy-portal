
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
}

const SEO = ({ 
  title, 
  description = "Seethawaka Pharmacy offers quality healthcare products and personalized pharmaceutical services in Hanwella, Sri Lanka.",
  canonicalUrl = "",
  ogImageUrl = "/lovable-uploads/c3b27540-227b-4533-b7c4-307b193b5618.png"
}: SEOProps) => {
  const siteTitle = "Seethawaka Pharmacy";
  const fullTitle = `${title} | ${siteTitle}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEO;
