import StructuredData from "./StructuredData";

export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "BooSkills",
        "url": "https://booskills.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://booskills.com/booskills-logo-black-1.svg",
            "width": 280,
            "height": 146
        },
        "description": "BooSkills provides professional WordPress Plugin Development training. Learn to build secure, fast, and maintainable WordPress plugins using modern best practices. Most up-to-date course created after release of WordPress 5.0.",
        "foundingDate": "2021",
        "founder": {
            "@type": "Person",
            "name": "Rao Abid Ali",
            "jobTitle": "WordPress Expert & Instructor",
            "url": "https://booskills.com/about"
        },
        "sameAs": [
            "https://web.facebook.com/rao.abidali.7982",
            "https://twitter.com/RaoAbidDev",
            "https://profiles.wordpress.org/boospot/",
            "https://github.com/boospot"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "rao@booskills.com",
            "contactType": "Customer Service",
            "availableLanguage": "English"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "WordPress Training Courses",
            "itemListElement": {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Course",
                    "name": "WordPress Plugin Development Using Boilerplate"
                }
            }
        }
    };

    return <StructuredData schema={schema} />;
}

