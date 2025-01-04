// pages/auth/reset-password.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;

      setMessage('Password updated successfully. Redirecting to app...');
      
      // Redirect back to app
      setTimeout(() => {
        window.location.href = 'chatabubble://auth/login?reset=true';
      }, 2000);
    } catch (error) {
      console.error('Error resetting password:', error);
      setMessage('Error resetting password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Reset Your Password</h1>
        
        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}