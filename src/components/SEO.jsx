import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
    const url = window.location.href;
    return(
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* open graph */}

    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:url" content={url}/>
    <meta property="og:type" content="website"/>

    {/* Twitter */}
<meta  name="twitter:title" content={title}/>
<meta  name="twitter:description" content={description}/>

{/* canonical */}
<link rel="canonical" href={url} />

<script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Glownest Beauty Parlor",
  "image": "https://yourdomain.com/preview.jpg",
  "@id": "https://yourdomain.com",
  "url": "https://yourdomain.com",
  "telephone": "+9779818142024",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Amrit Nagar, Opposite Bhatbhateni Kalanki",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati",
    "postalCode": "44600",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.6915,
    "longitude": 85.2820
  },
  "openingHours": "Mo-Su 09:00-19:00",
  "priceRange": "$$",
  "sameAs": [
    "https://facebook.com/yourpage",
    "https://instagram.com/yourpage"
  ]
}
`}
</script>

  </Helmet>
    )
};

export default SEO;
   