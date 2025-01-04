// app/auth/callback/page.tsx
'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function CallbackHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirect = searchParams.get('redirect');
    const token = searchParams.get('token_hash');

    const handleCallback = async () => {
      try {
        if (token) {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'email'
          });

          if (error) throw error;
        }

        if (redirect) {
          window.location.href = decodeURIComponent(redirect);
        } else {
          window.location.href = 'chatabubble://auth/login?verified=true';
        }
      } catch (error) {
        console.error('Error during verification:', error);
      }
    };

    handleCallback();
  }, [searchParams]);

  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Verifying your email...</h1>
        <p className="text-gray-600">You will be redirected back to the app shortly.</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={
      <div className="rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    }>
      <CallbackHandler />
    </Suspense>
  );
}