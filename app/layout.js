import Navbar from "@/components/shared/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full">
       <Navbar/>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
