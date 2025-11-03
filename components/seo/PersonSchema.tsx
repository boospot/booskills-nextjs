import StructuredData from "./StructuredData";

export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rao Abid Ali",
        "alternateName": "Rao Abid",
        "jobTitle": "WordPress Expert & Instructor",
        "description": "WordPress Expert with 10+ years of experience coding and designing WordPress plugins and themes. Creator of BooSkills WordPress Plugin Development course, trusted by 500+ students worldwide.",
        "url": "https://booskills.com/about",
        "image": "https://booskills.com/rao-abid.jpg",
        "sameAs": [
            "https://web.facebook.com/rao.abidali.7982",
            "https://twitter.com/RaoAbidDev",
            "https://profiles.wordpress.org/boospot/",
            "https://github.com/boospot"
        ],
        "email": "rao@booskills.com",
        "knowsAbout": [
            "WordPress Plugin Development",
            "WordPress Theme Development",
            "PHP",
            "WordPress Coding Standards",
            "WordPress Plugin Boilerplate",
            "JavaScript",
            "jQuery",
            "WordPress REST API",
            "WordPress Security"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Self-Taught Developer"
        },
        "memberOf": {
            "@type": "Organization",
            "name": "BooSkills",
            "url": "https://booskills.com"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "BooSkills"
        },
        "hasOccupation": {
            "@type": "Occupation",
            "name": "WordPress Developer",
            "occupationLocation": {
                "@type": "Country",
                "name": "Pakistan"
            }
        }
    };

    return <StructuredData schema={schema} />;
}

