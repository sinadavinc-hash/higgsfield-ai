import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Higgsfield AI Studio',
  description: 'AI Image & Video Generator with Gemini Integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
