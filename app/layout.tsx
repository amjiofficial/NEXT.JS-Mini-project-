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
          color: "#111827",
        }}
      >
        {/* Header */}
        <header
          style={{
            width: "100%",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0f172a",
            color: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          {/* Website Logo / Name */}
          <Link href="/">
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#ffffff", // logo font color white
                cursor: "pointer",
              }}
            >
              MyWebsite
            </div>
          </Link>

          {/* Navigation Buttons */}
          <nav style={{ display: "flex", gap: "1rem" }}>
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
          </nav>
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