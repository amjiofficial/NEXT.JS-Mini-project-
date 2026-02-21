import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Amjad Ullah",
  description:
    "Get in touch with Amjad Ullah - Product Engineer at Kompass Technologies.",
};

export default function ContactPage() {
  return (
    <div className="card">
      <h1>Contact</h1>

      <p style={{ marginBottom: "1.5rem" }}>
        Feel free to reach out for collaborations, product discussions,
        or engineering opportunities.
      </p>

      <div style={{ textAlign: "left", lineHeight: "1.8" }}>
        <p>
          <strong>Name:</strong> Amjad Ullah
        </p>
        <p>
          <strong>Phone:</strong> 03360533297
        </p>
        <p>
          <strong>Email:</strong> amjadmahsood12345@gmail.com
        </p>
        <p>
          <strong>Position:</strong> Product Engineer
        </p>
        <p>
          <strong>Company:</strong> Kompass Technologies Private Limited
        </p>
      </div>

      <hr style={{ margin: "1.5rem 0", opacity: 0.2 }} />

      <p style={{ fontStyle: "italic", color: "#6b7280" }}>
        Let’s build scalable systems and meaningful products together.
      </p>
    </div>
  );
}