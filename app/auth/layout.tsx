// app/auth/layout.tsx
export const metadata = {
    title: 'Authentication - Chata Bubble',
    description: 'Authenticate with Chata Bubble',
  };
  
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          {children}
        </div>
      </div>
    );
  }