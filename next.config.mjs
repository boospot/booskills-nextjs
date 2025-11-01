/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Hire page redirects to contact
            {
                source: '/hire',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/hire/',
                destination: '/contact',
                permanent: true,
            },
            // About page redirects
            {
                source: '/rao',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/rao/',
                destination: '/about',
                permanent: true,
            },
            // Course page redirects
            {
                source: '/course/wordpress-plugin-development-using-boilerplate',
                destination: '/buy-course',
                permanent: true,
            },
            {
                source: '/course/wordpress-plugin-development-using-boilerplate/',
                destination: '/buy-course',
                permanent: true,
            },
            // Common WordPress URL patterns
            {
                source: '/contact-us',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/contact-us/',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/courses',
                destination: '/buy-course',
                permanent: true,
            },
            {
                source: '/courses/',
                destination: '/buy-course',
                permanent: true,
            },
            {
                source: '/course',
                destination: '/buy-course',
                permanent: true,
            },
            {
                source: '/course/',
                destination: '/buy-course',
                permanent: true,
            },
            {
                source: '/enroll',
                destination: '/buy-course',
                permanent: true,
            },
            {
                source: '/about-us',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/about-us/',
                destination: '/about',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
