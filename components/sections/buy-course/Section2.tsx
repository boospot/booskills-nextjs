import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*buy-course section 2 - What You'll Learn & Course Content*/}
            <section className="data-analysis-about-section-2 position-relative overflow-hidden pt-120 pb-120 bg-secondary-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <span className="btn-text text-primary">Course Content</span>
                            <h2 className="text-dark my-3 text-anime-style-2">What You'll Learn</h2>
                            <div className="mt-5">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-start gap-3 py-2">
                                        <i className="fa-solid fa-check text-primary mt-1" />
                                        <p className="mb-0">Create, save and retrieve custom fields using metaboxes</p>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 py-2">
                                        <i className="fa-solid fa-check text-primary mt-1" />
                                        <p className="mb-0">Different field types like color field, textareas, select fields, checkboxes, multiselect, posts dropdown, media fields and many more</p>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 py-2">
                                        <i className="fa-solid fa-check text-primary mt-1" />
                                        <p className="mb-0">Register, configure, output and style Shortcodes</p>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 py-2">
                                        <i className="fa-solid fa-check text-primary mt-1" />
                                        <p className="mb-0">Learn how to make extendable plugins and manage cleanup at uninstall</p>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 py-2">
                                        <i className="fa-solid fa-check text-primary mt-1" />
                                        <p className="mb-0">Professional WordPress plugin structure using WordPress Plugin Boilerplate</p>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 py-2">
                                        <i className="fa-solid fa-check text-primary mt-1" />
                                        <p className="mb-0">Build plugins with proper OOP architecture</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <h4 className="mb-4">Course Content</h4>
                                <div className="accordion">
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={0}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-intro">
                                                <h6 className="fs-20 mb-0">Introduction - 18 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-intro" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Introduction</p>
                                                <p className="fs-6 fw-regular mb-2">• Before you take this course</p>
                                                <p className="fs-6 fw-regular mb-2">• How this course can enhance your plugin development skills</p>
                                                <p className="fs-6 fw-regular mb-2">• Exercise Files and other Resources</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-setup">
                                                <h6 className="fs-20 mb-0">Development Setup - 29 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-setup" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Tools Required</p>
                                                <p className="fs-6 fw-regular mb-2">• Install WordPress using WAMP</p>
                                                <p className="fs-6 fw-regular mb-2">• WordPress Coding Standards - Why and How</p>
                                                <p className="fs-6 fw-regular mb-2">• Install PHP Code Sniffer and WordPress Coding Standards</p>
                                                <p className="fs-6 fw-regular mb-2">• PhpStorm - Configuring WordPress Coding Standards</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-concepts">
                                                <h6 className="fs-20 mb-0">Key Concepts - 33 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-concepts" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Key Concepts</p>
                                                <p className="fs-6 fw-regular mb-2">• What is Custom Post Type (CPT), Custom Fields and Metaboxes</p>
                                                <p className="fs-6 fw-regular mb-2">• What are Shortcodes</p>
                                                <p className="fs-6 fw-regular mb-2">• What is Options and/or Settings Page</p>
                                                <p className="fs-6 fw-regular mb-2">• What is a Widget</p>
                                                <p className="fs-6 fw-regular mb-2">• How WordPress loads Plugins</p>
                                                <p className="fs-6 fw-regular mb-2">• Actions and Filters</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={600}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-boilerplate">
                                                <h6 className="fs-20 mb-0">Boilerplate - 28 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-boilerplate" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• What is Boilerplate, Why use it?</p>
                                                <p className="fs-6 fw-regular mb-2">• Getting Ready with Boilerplate</p>
                                                <p className="fs-6 fw-regular mb-2">• Tips for using Boilerplate Generator</p>
                                                <p className="fs-6 fw-regular mb-2">• Structure of Boilerplate</p>
                                                <p className="fs-6 fw-regular mb-2">• Defining helper constants</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={800}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-cpt">
                                                <h6 className="fs-20 mb-0">Custom Post Types - 1 hr, 28 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-cpt" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Register Custom Post Type</p>
                                                <p className="fs-6 fw-regular mb-2">• Challenge Time</p>
                                                <p className="fs-6 fw-regular mb-2">• Method 1: Using Public Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Method 2: Using Dedicated CPT Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Revisiting: Need for Boilerplate</p>
                                                <p className="fs-6 fw-regular mb-2">• How to Fix 404 error on Custom Post Type</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={1000}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-metabox">
                                                <h6 className="fs-20 mb-0">Metabox and Custom Fields - 2 hr, 29 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-metabox" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Metabox for Custom Post Type</p>
                                                <p className="fs-6 fw-regular mb-2">• Add Metabox to CPT</p>
                                                <p className="fs-6 fw-regular mb-2">• Metabox with Gutenberg Editor</p>
                                                <p className="fs-6 fw-regular mb-2">• Adding and Saving Custom Fields to Metabox</p>
                                                <p className="fs-6 fw-regular mb-2">• nonce fields and nonce verification</p>
                                                <p className="fs-6 fw-regular mb-2">• Enhanced Metaboxes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={1200}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-settings">
                                                <h6 className="fs-20 mb-0">Plugin Options Settings Page - 1 hr, 56 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-settings" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Plugin Options Settings Page</p>
                                                <p className="fs-6 fw-regular mb-2">• Top level admin menu</p>
                                                <p className="fs-6 fw-regular mb-2">• Sub menu item for plugin</p>
                                                <p className="fs-6 fw-regular mb-2">• Settings Page using Form POST method</p>
                                                <p className="fs-6 fw-regular mb-2">• Settings API - Display Sections and Security features</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={1400}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-shared">
                                                <h6 className="fs-20 mb-0">Global Shared Class - 18 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-shared" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Creating Global Shared Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Template Loader in Global Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Helper Utility Functions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={1600}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-shortcodes">
                                                <h6 className="fs-20 mb-0">Shortcodes - 1 hr, 18 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-shortcodes" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Shortcodes intro</p>
                                                <p className="fs-6 fw-regular mb-2">• Understanding add_shortcode function</p>
                                                <p className="fs-6 fw-regular mb-2">• Creating Dedicated Shortcode Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Shortcode for Custom Post Type Loop</p>
                                                <p className="fs-6 fw-regular mb-2">• Configuring Default Values for Attributes</p>
                                                <p className="fs-6 fw-regular mb-2">• Using Attributes in Shortcode Output</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={1800}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-widgets">
                                                <h6 className="fs-20 mb-0">Widgets - 1 hr, 55 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-widgets" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Widgets in Plugin Boilerplate</p>
                                                <p className="fs-6 fw-regular mb-2">• Creating Dedicated Widgets Control Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Widgets API - Understanding Widget Class</p>
                                                <p className="fs-6 fw-regular mb-2">• Widgets API - Understanding args and instance of a widget</p>
                                                <p className="fs-6 fw-regular mb-2">• Widgets API - Output and Form methods</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={2000}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-finalization">
                                                <h6 className="fs-20 mb-0">Plugin Finalization - 1 hr</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-finalization" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Plugin Finalization</p>
                                                <p className="fs-6 fw-regular mb-2">• Plugin Security and Best Practices</p>
                                                <p className="fs-6 fw-regular mb-2">• Best Practices to Avoid Naming Collisions</p>
                                                <p className="fs-6 fw-regular mb-2">• POT File Generation for plugin Translation</p>
                                                <p className="fs-6 fw-regular mb-2">• Using custom apply_filter to allow modifications</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-0 card rounded-4 overflow-hidden mb-3 collapse-custom" data-aos="fade-up" data-aos-delay={2200}>
                                        <div className="p-0 card-header border-0">
                                            <Link className="collapsed p-3 fw-bold d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#course-conclusion">
                                                <h6 className="fs-20 mb-0">Conclusion and Next Steps - 2 min</h6>
                                                <span className="arrow" />
                                            </Link>
                                        </div>
                                        <div id="course-conclusion" className="collapse" data-bs-parent=".accordion">
                                            <div className="px-3 py-2">
                                                <p className="fs-6 fw-regular mb-2">• Conclusion and Next Steps</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 position-relative">
                            <div className="card-pricing border rounded-3 p-md-5 p-4 mb-5" style={{position: "sticky", top: "200px", zIndex: 1}} data-aos="fade-up" data-aos-delay={200}>
                                <div className="text-center mb-4">
                                    <span className="btn-text text-primary">COURSE PREVIEW:</span>
                                    <p className="mt-3 mb-4">Learn professional WordPress Plugin development in project based course. Learn how to do it the faster, smarter, easier!</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-4 pb-4 border-bottom">
                                    <div className="position-relative rounded-4 zoom-img overflow-hidden d-inline-flex" style={{width: "80px", height: "80px"}}>
                                        <img src="/rao-abid.jpg" alt="Rao Abid Ali" className="w-100 h-100 object-fit-cover rounded-4" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1">Rao Abid Ali</h6>
                                        <p className="fs-7 mb-0 opacity-75">BooSpot</p>
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <h1 className="mb-0">$19.99</h1>
                                </div>
                                <Link href="https://www.udemy.com/wordpress-plugin-development-using-boilerplate/?couponCode=BOOSKILLS" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100 hover-up">
                                    ENROLL NOW
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

