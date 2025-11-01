import StructuredData from "./StructuredData";

export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "BooSkills",
        "url": "https://booskills.com",
        "logo": "https://booskills.com/booskills-logo-white-2.svg",
        "description": "Learn professional WordPress Plugin development with BooSkills. Most up-to-date course created after release of WordPress 5.0.",
        "founder": {
            "@type": "Person",
            "name": "Rao Abid Ali",
            "jobTitle": "WordPress Expert & Instructor",
            "url": "https://profiles.wordpress.org/boospot/"
        },
        "sameAs": [
            "https://web.facebook.com/rao.abidali.7982",
            "https://twitter.com/RaoAbidDev",
            "https://profiles.wordpress.org/boospot/",
            "https://github.com/boospot"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@booskills.com",
            "contactType": "Customer Service"
        }
    };

    return <StructuredData data={schema} />;
}

