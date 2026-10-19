"use client";

export const dynamic = "force-static";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ display: "grid", placeItems: "center", minHeight: "100svh", fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "2rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>Something went wrong.</h1>
          <p style={{ color: "#607087", marginBottom: "1.5rem" }}>An unexpected error occurred. Please try again.</p>
          <button
            onClick={reset}
            style={{ padding: "0.6rem 1.4rem", background: "#FF6A00", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 600, cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
