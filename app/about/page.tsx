import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import PageHeader from "@/components/sections/PageHeader";
import PersonSchema from "@/components/seo/PersonSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about BooSkills and Rao Abid Ali, WordPress Expert with 10+ years of experience. Professional WordPress Plugin Development training through interactive, practice-based learning.",
    keywords: ["About BooSkills", "WordPress Expert", "Rao Abid Ali", "WordPress Plugin Developer", "WordPress Instructor"],
    alternates: {
        canonical: "https://booskills.com/about",
    },
    openGraph: {
        title: "About BooSkills - WordPress Plugin Development Training",
        description: "Learn about BooSkills and Rao Abid Ali, WordPress Expert with 10+ years of experience in WordPress Plugin Development.",
        url: "https://booskills.com/about",
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
