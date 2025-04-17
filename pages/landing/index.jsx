import Head from 'next/head';
import { MainLayout } from '@layouts';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Welcome to Our Platform</title>
        <meta name="description" content="Welcome landing page for main domain" />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Our Restaurant Platform</h1>
        <p>
          Select a restaurant from the subdomains or browse our public offerings.
        </p>
      </main>
    </>
  );
}

Landing.getLayout = (page) => <MainLayout>{page}</MainLayout>;