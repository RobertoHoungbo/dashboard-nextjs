import '@/app/ui/global.css';
import { inter } from '@/app/ui/font_2';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased` }>{children}</body>
    </html>
  );
}
