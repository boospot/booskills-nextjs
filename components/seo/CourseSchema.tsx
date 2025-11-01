import StructuredData from "./StructuredData";

export default function CourseSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "WordPress Plugin Development Using Boilerplate",
        "description": "Learn professional WordPress Plugin development in project based course. Master the skills to create secure and fast WordPress plugins with expert guidance.",
        "provider": {
            "@type": "Organization",
            "name": "BooSkills",
            "url": "https://booskills.com"
        },
        "instructor": {
            "@type": "Person",
            "name": "Rao Abid Ali",
            "jobTitle": "WordPress Expert & Instructor",
            "url": "https://profiles.wordpress.org/boospot/"
        },
        "courseCode": "WP-PLUGIN-DEV",
        "educationalLevel": "Intermediate",
        "teaches": [
            "WordPress Plugin Development",
            "WordPress Plugin Boilerplate",
            "Custom Metaboxes",
            "WordPress Settings API",
            "Shortcodes",
            "Widgets",
            "WordPress Coding Standards"
        ],
        "offers": {
            "@type": "Offer",
            "price": "19.99",
            "priceCurrency": "USD",
            "url": "https://www.udemy.com/wordpress-plugin-development-using-boilerplate/?couponCode=BOOSKILLS",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "500"
        }
    };

    return <StructuredData data={schema} />;
}

