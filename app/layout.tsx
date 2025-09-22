
import "./globals.css";
import Navbar from "@/components/Nav";
import PageTransition from "@/components/PageTransition";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <PageTransition>
        <Navbar />
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
