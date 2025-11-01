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
    title: "Home",
    description: "Learn professional WordPress Plugin development with BooSkills. Most up-to-date course created after release of WordPress 5.0 will give you the necessary skills to create professional plugins that are secure and fast. Join 500+ students learning WordPress development.",
    keywords: ["WordPress Plugin Development", "WordPress Course", "Plugin Development Course", "WordPress Training", "Learn WordPress Development"],
    alternates: {
        canonical: "https://booskills.com",
    },
    openGraph: {
        title: "BooSkills - WordPress Plugin Development Course",
        description: "Learn professional WordPress Plugin development with BooSkills. Join 500+ students learning WordPress development.",
        url: "https://booskills.com",
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