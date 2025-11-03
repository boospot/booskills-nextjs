import React from "react";

export default function StructuredData({ data, schema }: { data?: object; schema?: object }) {
    const jsonData = data || schema;
    if (!jsonData) {
        return null;
    }
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
        />
    );
}

