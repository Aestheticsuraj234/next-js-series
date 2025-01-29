
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full">
      
      
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
