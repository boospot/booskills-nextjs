import type { Metadata } from "next";
import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home/Section1'
import Section2 from '@/components/sections/home/Section2'
import Section3 from '@/components/sections/home/Section3'
import Section4 from '@/components/sections/home/Section4'
import Section5 from '@/components/sections/home/Section5'
import Section6 from '@/components/sections/home/Section6'
import CourseSchema from "@/components/seo/CourseSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
    title: "WordPress Plugin Development Course | Learn Professional Plugin Development - BooSkills",
    description: "Master WordPress Plugin Development with BooSkills. Learn to build secure, professional WordPress plugins using modern best practices. 12+ hours of HD video, 101 lectures, project-based learning. Join 500+ students learning WordPress development. Enroll now for $19.99.",
    keywords: ["WordPress Plugin Development", "WordPress Plugin Development Course", "Learn WordPress Development", "WordPress Course", "WordPress Training", "WordPress Developer Course", "WordPress Plugin Boilerplate", "Udemy WordPress Course", "WordPress Coding"],
    alternates: {
        canonical: "https://booskills.com",
    },
    openGraph: {
        title: "WordPress Plugin Development Course | Learn Professional Plugin Development - BooSkills",
        description: "Master WordPress Plugin Development with BooSkills. Learn to build secure, professional WordPress plugins. 12+ hours of HD video, 101 lectures, project-based learning. Join 500+ students.",
        url: "https://booskills.com",
        type: "website",
        images: [
            {
                url: "/booskills-logo-black-1.svg",
                width: 1200,
                height: 630,
                alt: "BooSkills - WordPress Plugin Development Course",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress Plugin Development Course | Learn Professional Plugin Development - BooSkills",
        description: "Master WordPress Plugin Development with BooSkills. Learn to build secure, professional WordPress plugins. 12+ hours of HD video, 101 lectures.",
        images: ["/booskills-logo-black-1.svg"],
    },
};

export default function Home() {
	return (
		<>
			<OrganizationSchema />
			<CourseSchema />
			<Layout>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
			</Layout>
		</>
	)
}