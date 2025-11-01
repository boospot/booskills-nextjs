import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section6 from "@/components/sections/about/Section6";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Hire / Contact",
    description: "Hire Rao Abid Ali for freelance WordPress Plugin Development projects. Available for custom plugin development, plugin maintenance, and WordPress consultation. Get in touch for your WordPress project needs.",
    keywords: ["Hire WordPress Developer", "WordPress Plugin Developer", "Freelance WordPress Developer", "WordPress Consultant", "WordPress Plugin Development Services"],
    alternates: {
        canonical: "https://booskills.com/contact",
    },
    openGraph: {
        title: "Hire WordPress Plugin Developer - BooSkills",
        description: "Hire for freelance WordPress Plugin Development projects. Custom plugins, maintenance, and consultation. 10+ years of WordPress experience.",
        url: "https://booskills.com/contact",
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
