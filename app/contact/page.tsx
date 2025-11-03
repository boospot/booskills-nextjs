import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section6 from "@/components/sections/about/Section6";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Hire WordPress Plugin Developer | Contact Rao Abid Ali - Freelance WordPress Expert",
    description: "Hire Rao Abid Ali for freelance WordPress Plugin Development projects. 10+ years of experience. Available for custom plugin development, plugin maintenance, and WordPress consultation. Get in touch today for your WordPress project needs.",
    keywords: ["Hire WordPress Developer", "WordPress Plugin Developer", "Freelance WordPress Developer", "WordPress Consultant", "WordPress Plugin Development Services", "Hire WordPress Expert", "WordPress Freelancer", "Custom WordPress Plugin Development"],
    alternates: {
        canonical: "https://booskills.com/contact",
    },
    openGraph: {
        title: "Hire WordPress Plugin Developer | Contact Rao Abid Ali - Freelance WordPress Expert",
        description: "Hire Rao Abid Ali for freelance WordPress Plugin Development projects. 10+ years of experience. Custom plugins, maintenance, and consultation. Get in touch today.",
        url: "https://booskills.com/contact",
        type: "website",
        images: [
            {
                url: "/rao-abid.jpg",
                width: 1200,
                height: 630,
                alt: "Rao Abid Ali - Freelance WordPress Plugin Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire WordPress Plugin Developer | Contact Rao Abid Ali - Freelance WordPress Expert",
        description: "Hire Rao Abid Ali for freelance WordPress Plugin Development projects. 10+ years of experience. Custom plugins, maintenance, and consultation.",
        images: ["/rao-abid.jpg"],
    },
};

export default function Contact() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://booskills.com" },
                { name: "Hire / Contact", url: "https://booskills.com/contact" }
            ]} />
            <Layout>
                <PageHeader title="Hire / Contact" current_page="Hire / Contact" />
                <Section1 />
                <Section6 />
            </Layout>
        </>
    );
}
