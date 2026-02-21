import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "Professional Next.js website with card layout.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#f0f4f8",
        }}
      >
        {/* Header */}
        <header
              style={{
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                background: "#0f172a",
              }}
            >
              <Link href="/">
                <button className="nav-btn">Home</button>
              </Link>

              <Link href="/about">
                <button className="nav-btn">About</button>
              </Link>

              <Link href="/contact">
                <button className="nav-btn">Contact</button>
              </Link>

              <Link href="/signup">
                <button className="nav-btn">Sign Up</button>
              </Link>
            </header>

        {/* Main content */}
        <main
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
              }}
            >
              {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e5e7eb",
            padding: "1.5rem 2rem",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          © 2026 My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}