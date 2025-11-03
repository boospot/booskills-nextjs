import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/fonts/fontawesome/fontawesome.min.css";
import "/public/assets/fonts/fontawesome/solid.min.css";
import "/public/assets/fonts/fontawesome/regular.min.css";
import "/public/assets/css/main.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Libre_Franklin, Rubik } from "next/font/google";
import Script from "next/script";

const libreFranklinHeading = Libre_Franklin({
    weight: ["300", "400", "500", "600", "700"], // Only bold for headings
    subsets: ["latin"],
    variable: "--tc-heading-font-family",
    display: "swap",
});

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--tc-body-font-family",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://booskills.com"),
    title: {
        default: "BooSkills - Learn WordPress Plugin Development | Professional Training Course",
        template: "%s | BooSkills"
    },
    description: "Master WordPress Plugin Development with BooSkills. Learn to build secure, professional WordPress plugins using modern best practices. 12+ hours of HD video, 101 lectures, project-based learning. Join 500+ students. Enroll now for $19.99.",
    keywords: ["WordPress Plugin Development", "WordPress Course", "WordPress Plugin Development Course", "Learn WordPress Development", "WordPress Training", "WordPress Developer Course", "WordPress Plugin Boilerplate", "Udemy WordPress Course"],
    authors: [{ name: "Rao Abid Ali", url: "https://booskills.com/about" }],
    creator: "Rao Abid Ali",
    publisher: "BooSkills",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://booskills.com",
        siteName: "BooSkills",
        title: "BooSkills - Learn WordPress Plugin Development | Professional Training Course",
        description: "Master WordPress Plugin Development with BooSkills. Learn to build secure, professional WordPress plugins. 12+ hours of HD video, 101 lectures, project-based learning. Join 500+ students.",
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
        title: "BooSkills - Learn WordPress Plugin Development | Professional Training Course",
        description: "Master WordPress Plugin Development with BooSkills. Learn to build secure, professional WordPress plugins. 12+ hours of HD video, 101 lectures.",
        images: ["/booskills-logo-black-1.svg"],
        creator: "@RaoAbidDev",
    },
    alternates: {
        canonical: "https://booskills.com",
    },
    category: "Education",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${libreFranklinHeading.variable} ${rubik.variable}`}>
                {/* BotID script - automatically loads BotID protection */}
                <Script src="https://botid.vercel.app/api.js" strategy="afterInteractive" />
                {children}
            </body>
        </html>
    );
}
