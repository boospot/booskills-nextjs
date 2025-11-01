import StructuredData from "./StructuredData";

interface BreadcrumbSchemaProps {
    items: Array<{ name: string; url: string }>;
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return <StructuredData data={schema} />;
}

