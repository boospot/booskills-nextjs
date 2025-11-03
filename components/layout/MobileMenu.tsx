"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [isAccordion, setIsAccordion] = useState<number | null>(null);
    const pathname = usePathname();

    const handleAccordion = (key: number) => {
        setIsAccordion((prevState) => (prevState === key ? null : key));
    };

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}

            <div className={`mobile-header-active mobile-header-wrapper-style ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-logo">
                        <Link className="d-flex align-items-center gap-2" href="/">
                            <img src="/booskills-logo-black-1.svg" alt="BooSkills" width="140" height="73" style={{maxWidth: "140px"}} />
                        </Link>
                        <div className={`burger-icon burger-icon-white border rounded-circle ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                            <span className="burger-icon-top" />
                            <span className="burger-icon-mid" />
                            <span className="burger-icon-bottom" />
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu ps-0">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/buy-course">Buy Course</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Hire/Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tgmobile__menu-bottom mt-auto">
                        <div className="contact-info">
                            <ul className="list-wrap">
                                <li>
                                    <span className="opacity-50">Mail:</span> <a href={`mailto:${['rao', '@', 'booskills', '.', 'com'].join('')}`} className="text-decoration-none" style={{color: "inherit"}} dangerouslySetInnerHTML={{ __html: ['rao', '&#64;', 'booskills', '.', 'com'].join('') }} />
                                </li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <div className="social-icons gap-4 mt-4">
                                <Link href="https://web.facebook.com/rao.abidali.7982" target="_blank" rel="noopener noreferrer" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-facebook" />
                                </Link>
                                <Link href="https://twitter.com/RaoAbidDev" target="_blank" rel="noopener noreferrer" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-twitter-x" />
                                </Link>
                                <Link href="https://profiles.wordpress.org/boospot/" target="_blank" rel="noopener noreferrer" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-wordpress" />
                                </Link>
                                <Link href="https://github.com/boospot" target="_blank" rel="noopener noreferrer" className="border border-opacity-10 border-white icon-shape icon-md">
                                    <i className="bi bi-github" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
