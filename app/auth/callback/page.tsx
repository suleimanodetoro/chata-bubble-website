// pages/auth/callback.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      // Get the access token from the URL
      const token = hash.substring(1);
      handleCallback(token);
    }
  }, []);

  const handleCallback = async (token: string) => {
    try {
      // Verify the token
      const { error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: 'email'
      });

      if (error) throw error;

      // Redirect back to app using deep linking
      window.location.href = 'chatabubble://auth/login?verified=true';
    } catch (error) {
      console.error('Error during verification:', error);
      // Handle error - maybe show an error page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Verifying your email...</h1>
        <p>Please wait while we verify your email address.</p>
      </div>
    </div>
  );
}