import Head from "next/head";

function SEO({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

SEO.displayName = "SEO";

export default SEO;
