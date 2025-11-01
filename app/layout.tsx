import "./globals.css";

export const metadata = {
  title: "Mon Site",
  description: "Site Next.js + Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full overflow-hidden">
        {children}
      </body>
    </html>
  );
}