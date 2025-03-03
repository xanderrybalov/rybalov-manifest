'use client';

import { useEffect, useState } from 'react';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';

const growthbook = new GrowthBook({
  apiHost: 'https://cdn.growthbook.io', // API Host
  clientKey: 'your-key', // Your SDK API Key
  enableDevMode: process.env.NODE_ENV !== 'production',
});

export function GrowthbookProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  console.log('growthbook =>', growthbook);

  useEffect(() => {
    growthbook.loadFeatures().then(() => setReady(true));
  }, []);

  if (!ready) return <div>Loading...</div>;

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  );
}
