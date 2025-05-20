'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
}
