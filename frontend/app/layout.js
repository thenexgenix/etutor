export const metadata = {
  title: "e-tutor",
  description: "Learn anything, anywhere.",
};
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-white text-gray-900 antialiased"
        suppressHydrationWarning={true}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="container mx-auto w-full flex-1">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
