import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/buy-course/Section1";
import Section2 from "@/components/sections/buy-course/Section2";
import Section3 from "@/components/sections/buy-course/Section3";
import Section4 from "@/components/sections/buy-course/Section4";
import Section5 from "@/components/sections/buy-course/Section5";
import CourseSchema from "@/components/seo/CourseSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Buy WordPress Plugin Development Course | Enroll Now - $19.99 | BooSkills",
    description: "Buy WordPress Plugin Development course on Udemy. 12+ hours of HD video, 101 lectures, project-based learning. Learn professional WordPress Plugin development using Boilerplate. Master secure plugin development. Enroll now for $19.99 - Limited time offer!",
    keywords: ["Buy WordPress Course", "WordPress Plugin Development Course", "Udemy WordPress Course", "WordPress Training", "Plugin Development Training", "WordPress Course Price", "WordPress Plugin Development Tutorial", "WordPress Online Course"],
    alternates: {
        canonical: "https://booskills.com/buy-course",
    },
    openGraph: {
        title: "Buy WordPress Plugin Development Course | Enroll Now - $19.99 | BooSkills",
        description: "Buy WordPress Plugin Development course on Udemy. 12+ hours of HD video, 101 lectures, project-based learning. Learn professional WordPress Plugin development. Enroll now for $19.99!",
        url: "https://booskills.com/buy-course",
        type: "website",
        images: [
            {
                url: "/booskills-logo-black-1.svg",
                width: 1200,
                height: 630,
                alt: "BooSkills WordPress Plugin Development Course - Enroll Now",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Buy WordPress Plugin Development Course | Enroll Now - $19.99 | BooSkills",
        description: "Buy WordPress Plugin Development course. 12+ hours of HD video, 101 lectures, project-based learning. Enroll now for $19.99!",
        images: ["/booskills-logo-black-1.svg"],
    },
};

export default function BuyCourse() {
    return (
        <>
            <CourseSchema />
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://booskills.com" },
                { name: "Buy Course", url: "https://booskills.com/buy-course" }
            ]} />
            <Layout>
                <PageHeader title="Buy Course" current_page="Buy Course" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Layout>
        </>
    );
}

