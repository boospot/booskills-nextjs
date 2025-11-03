import StructuredData from "./StructuredData";

export default function CourseSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "WordPress Plugin Development Using Boilerplate",
        "description": "Learn professional WordPress Plugin development in a project-based course. Master the skills to create secure and fast WordPress plugins using modern best practices. 12+ hours of HD video, 101 lectures, hands-on exercises, and real-world projects.",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "BooSkills",
            "url": "https://booskills.com",
            "logo": "https://booskills.com/booskills-logo-black-1.svg"
        },
        "instructor": {
            "@type": "Person",
            "name": "Rao Abid Ali",
            "jobTitle": "WordPress Expert & Instructor",
            "url": "https://booskills.com/about",
            "image": "https://booskills.com/rao-abid.jpg",
            "sameAs": [
                "https://profiles.wordpress.org/boospot/",
                "https://web.facebook.com/rao.abidali.7982",
                "https://twitter.com/RaoAbidDev",
                "https://github.com/boospot"
            ]
        },
        "courseCode": "WP-PLUGIN-DEV",
        "educationalLevel": "Intermediate",
        "timeRequired": "PT12H",
        "numberOfCredits": "101",
        "teaches": [
            "WordPress Plugin Development",
            "WordPress Plugin Boilerplate",
            "Custom Metaboxes",
            "WordPress Settings API",
            "Shortcodes",
            "Widgets",
            "WordPress Coding Standards",
            "PHP Development",
            "Object-Oriented Programming",
            "WordPress Security Best Practices"
        ],
        "offers": {
            "@type": "Offer",
            "price": "19.99",
            "priceCurrency": "USD",
            "url": "https://www.udemy.com/wordpress-plugin-development-using-boilerplate/?couponCode=BOOSKILLS",
            "availability": "https://schema.org/InStock",
            "validFrom": "2021-01-01"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "image": "https://booskills.com/booskills-logo-black-1.svg",
        "url": "https://booskills.com/buy-course"
    };

    return <StructuredData schema={schema} />;
}

