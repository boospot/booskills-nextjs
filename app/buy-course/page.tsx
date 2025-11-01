import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/buy-course/Section1";
import Section2 from "@/components/sections/buy-course/Section2";
import Section3 from "@/components/sections/buy-course/Section3";
import Section4 from "@/components/sections/buy-course/Section4";
import Section5 from "@/components/sections/buy-course/Section5";

export default function BuyCourse() {
    return (
        <>
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

