import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import PageHeader from "@/components/sections/PageHeader";
import PersonSchema from "@/components/seo/PersonSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "About BooSkills | Meet Rao Abid Ali - WordPress Expert & Instructor",
    description: "Learn about BooSkills and Rao Abid Ali, WordPress Expert with 10+ years of experience in WordPress Plugin Development. Professional training through interactive, practice-based learning. Trusted by 500+ students worldwide.",
    keywords: ["About BooSkills", "Rao Abid Ali", "WordPress Expert", "WordPress Plugin Developer", "WordPress Instructor", "WordPress Developer Biography", "WordPress Training Instructor"],
    alternates: {
        canonical: "https://booskills.com/about",
    },
    openGraph: {
        title: "About BooSkills | Meet Rao Abid Ali - WordPress Expert & Instructor",
        description: "Learn about BooSkills and Rao Abid Ali, WordPress Expert with 10+ years of experience in WordPress Plugin Development. Professional training through interactive, practice-based learning.",
        url: "https://booskills.com/about",
        type: "profile",
        images: [
            {
                url: "/rao-abid.jpg",
                width: 1200,
                height: 630,
                alt: "Rao Abid Ali - WordPress Expert & Instructor",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About BooSkills | Meet Rao Abid Ali - WordPress Expert & Instructor",
        description: "Learn about BooSkills and Rao Abid Ali, WordPress Expert with 10+ years of experience in WordPress Plugin Development.",
        images: ["/rao-abid.jpg"],
    },
};

export default function About() {
    return (
        <>
            <PersonSchema />
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://booskills.com" },
                { name: "About", url: "https://booskills.com/about" }
            ]} />
            <Layout>
                <PageHeader title="About" current_page="about" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
