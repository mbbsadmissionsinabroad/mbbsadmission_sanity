const EXTERNAL_DATA_URL = "https://www.mbbsadmissionsinabroad.com";

function generateSiteMap(allPagesData) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
     <!--We manually set the two URLs we know already-->
     <url>
           <loc>https://www.mbbsadmissionsinabroad.com</loc>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
       <url>
           <loc>https://www.mbbsadmissionsinabroad.com/blog</loc>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
       <url>
           <loc>https://www.mbbsadmissionsinabroad.com/contact</loc>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
       <url>
           <loc>https://www.mbbsadmissionsinabroad.com/gallery</loc>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     ${allPagesData
       .map((data) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${data.slug}`}</loc>
           <lastmod>${`${data.updatedAt}`}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  let query = encodeURIComponent(
    `*[_type in ["nav", "homePage", "reviews", "pages"]]`
  );
  const data = await fetch(
    "https://xz1irwuo.api.sanity.io/v2021-10-21/data/query/production?query=" +
      query
  );
  const apiResult = await data.json();

  const pagesData = apiResult.result
    .filter(
      (item) =>
        item._type === "pages" &&
        item.slug &&
        item.slug.current &&
        item._updatedAt
    )
    .map((item) => ({
      slug: item.slug.current,
      updatedAt: item._updatedAt,
    }));
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  const sitemap = generateSiteMap(pagesData);
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;
