export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Render JSON safely escaped for HTML context
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
