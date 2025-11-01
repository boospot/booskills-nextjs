import StructuredData from "./StructuredData";

export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rao Abid Ali",
        "jobTitle": "WordPress Expert & Instructor",
        "description": "WordPress Expert with 10+ years of experience coding and designing WordPress plugins and themes.",
        "url": "https://booskills.com/about",
        "sameAs": [
            "https://web.facebook.com/rao.abidali.7982",
            "https://twitter.com/RaoAbidDev",
            "https://profiles.wordpress.org/boospot/",
            "https://github.com/boospot"
        ],
        "email": "info@booskills.com",
        "knowsAbout": [
            "WordPress Plugin Development",
            "WordPress Theme Development",
            "PHP",
            "WordPress Coding Standards",
            "WordPress Plugin Boilerplate"
        ],
        "memberOf": {
            "@type": "Organization",
            "name": "BooSkills"
        }
    };

    return <StructuredData data={schema} />;
}

