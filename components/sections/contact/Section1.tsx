"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";

const HCaptcha = dynamic(() => import("@hcaptcha/react-hcaptcha").then((mod) => mod.default), {
    ssr: false,
    loading: () => <div className="hcaptcha-loading" style={{ minHeight: "78px" }}>Loading verification...</div>
});

export default function Section1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
    const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
    const hcaptchaRef = useRef<HCaptcha>(null);
    const hcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: "" });
        }
    };

    const handleCaptchaVerify = (token: string) => {
        setHcaptchaToken(token);
    };

    const handleCaptchaExpire = () => {
        setHcaptchaToken(null);
    };

    useEffect(() => {
        // Refresh AOS when component mounts to ensure animations work correctly
        AOS.refresh();
        
        // Debug: Log hCaptcha sitekey status (only in development)
        if (process.env.NODE_ENV === 'development' && !hcaptchaSiteKey) {
            console.warn('hCaptcha sitekey is not configured. Please set NEXT_PUBLIC_HCAPTCHA_SITE_KEY in your environment variables.');
        }
    }, [hcaptchaSiteKey]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Check if hCaptcha is completed (only if sitekey is configured)
        if (hcaptchaSiteKey && !hcaptchaToken) {
            setSubmitStatus({ 
                type: "error", 
                message: "Please complete the verification challenge." 
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    hcaptchaToken: hcaptchaToken
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus({ 
                    type: "success", 
                    message: data.message || "Your message has been sent successfully! We will get back to you soon." 
                });
                // Reset form and hCaptcha
                setFormData({ name: "", email: "", message: "" });
                setHcaptchaToken(null);
                hcaptchaRef.current?.resetCaptcha();
            } else {
                setSubmitStatus({ 
                    type: "error", 
                    message: data.error || "Failed to send message. Please try again." 
                });
            }
        } catch (error) {
            setSubmitStatus({ 
                type: "error", 
                message: "An error occurred. Please try again later." 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/*data-analysis contact section 1*/}
            <section className="data-analysis-contact-section-1 position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ms-lg-auto mt-lg-0 mt-5 d-none d-lg-block">
                            <div data-aos="fade-right" data-aos-once="true">
                                <img className="rounded-4" src="assets/imgs/pages/data-analysis/page-child/img-7.png" alt="Contact BooSkills for WordPress Plugin Development" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <span className="btn-text fs-7 text-primary">Hire For Plugin Development</span>
                            <h2 className="mb-6 mt-3 text-anime-style-2">Let's discuss your project</h2>
                            <p className="mb-4">I'm available for freelance WordPress plugin development projects. Whether you need a custom plugin, have an existing plugin that needs improvements, or want to add specific functionality to your WordPress site, I'd love to hear from you.</p>
                            <form onSubmit={handleSubmit} className="input-group mb-3 mt-4 position-relative">
                                {submitStatus.type && (
                                    <div className={`alert ${submitStatus.type === "success" ? "alert-success" : "alert-danger"} mb-4`} role="alert">
                                        {submitStatus.message}
                                    </div>
                                )}
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="fs-7 fw-bold mb-3">
                                            Full name
                                        </label>
                                        <input 
                                            type="text" 
                                            className="py-3 form-control border-dark rounded-4" 
                                            name="name" 
                                            placeholder="Enter here" 
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="fs-7 fw-bold mb-3">
                                            Email address
                                        </label>
                                        <input 
                                            type="email" 
                                            className="py-3 form-control border-dark rounded-4" 
                                            name="email" 
                                            placeholder="Enter here" 
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <label htmlFor="message" className="fs-7 fw-bold mb-3">
                                            Message
                                        </label>
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            cols={30} 
                                            rows={8} 
                                            className="py-3 form-control border-dark rounded-4" 
                                            placeholder="Enter here" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {hcaptchaSiteKey && (
                                        <div className="col-12 mt-4">
                                            <HCaptcha
                                                sitekey={hcaptchaSiteKey}
                                                onVerify={handleCaptchaVerify}
                                                onExpire={handleCaptchaExpire}
                                                ref={hcaptchaRef}
                                            />
                                        </div>
                                    )}
                                    <div className="col-12 mt-5">
                                        <button 
                                            className="btn btn-primary hover-up" 
                                            type="submit" 
                                            aria-label="submit"
                                            disabled={isSubmitting || (!!hcaptchaSiteKey && !hcaptchaToken)}
                                        >
                                            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                            {!isSubmitting && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_886_362)">
                                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                                    </g>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row g-5 pt-120">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200} data-aos-once="true">
                            <div className=" pe-md-10">
                                <h6 className="pb-2 mb-4 border-bottom border-2">Get in touch</h6>
                                <Link href="mailto:info@booskills.com">
                                    <p className="mb-0">info@booskills.com</p>
                                </Link>
                                <p className="mb-0 mt-3 text-muted">I typically respond within 24 hours</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400} data-aos-once="true">
                            <div className=" pe-md-10">
                                <h6 className="pb-2 mb-4 border-bottom border-2">Connect with me</h6>
                                <div className="d-flex gap-3">
                                    <Link href="https://web.facebook.com/rao.abidali.7982" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-facebook fs-4"></i>
                                    </Link>
                                    <Link href="https://twitter.com/RaoAbidDev" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-twitter-x fs-4"></i>
                                    </Link>
                                    <Link href="https://profiles.wordpress.org/boospot/" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-wordpress fs-4"></i>
                                    </Link>
                                    <Link href="https://github.com/boospot" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-github fs-4"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
