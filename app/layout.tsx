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
    title: {
        default: "BooSkills - WordPress Plugin Development Course",
        template: "%s | BooSkills"
    },
    description: "Learn professional WordPress Plugin development with BooSkills. Most up-to-date course created after release of WordPress 5.0 will give you the necessary skills to create professional plugins.",
    keywords: ["WordPress Plugin Development", "WordPress Course", "Plugin Development", "WordPress Training", "WordPress Developer Course"],
    authors: [{ name: "Rao Abid Ali" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://booskills.com",
        siteName: "BooSkills",
        title: "BooSkills - WordPress Plugin Development Course",
        description: "Learn professional WordPress Plugin development with BooSkills. Most up-to-date course created after release of WordPress 5.0.",
    },
    twitter: {
        card: "summary_large_image",
        title: "BooSkills - WordPress Plugin Development Course",
        description: "Learn professional WordPress Plugin development with BooSkills.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${libreFranklinHeading.variable} ${rubik.variable}`}>{children}</body>
        </html>
    );
}
