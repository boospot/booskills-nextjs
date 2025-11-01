import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*data-analysis about section 2*/}
            <section className="data-analysis-about-section-2 position-relative overflow-hidden pt-120 pb-120">
                <div className="container">
                    <div className="row wow img-custom-anim-left">
                        <div className="col-12">
                            <nav>
                                <div className="nav nav-tabs flex-lg-nowrap border-bottom-0 mb-7" id="nav-tab" role="tablist">
                                    <button className="nav-link pb-2 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-label="mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="true">
                                        <span className="d-flex gap-2">
                                            <h2 className="lh-1">01</h2>
                                            <span className="text-start pe-lg-6">
                                                <h4>About BooSkills</h4>
                                                <p>Professional WordPress Plugin Development Training</p>
                                            </span>
                                        </span>
                                    </button>
                                    <button className="nav-link pb-2" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" aria-label="vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">
                                        <span className="d-flex gap-2">
                                            <h2 className="lh-1">02</h2>
                                            <span className="text-start pe-lg-6">
                                                <h4>Best Instructor</h4>
                                                <p>Expert with life-long WordPress development experience.</p>
                                            </span>
                                        </span>
                                    </button>
                                    <button className="nav-link pb-2" id="nav-expertise-tab" data-bs-toggle="tab" data-bs-target="#nav-expertise" aria-label="expertise" type="button" role="tab" aria-controls="nav-expertise" aria-selected="false">
                                        <span className="d-flex gap-2">
                                            <h2 className="lh-1">03</h2>
                                            <span className="text-start pe-lg-6">
                                                <h4>Course Features</h4>
                                                <p>Interactive, practice-based, project-focused learning.</p>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab" tabIndex={0}>
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="position-relative rounded-4 zoom-img overflow-hidden d-inline-flex">
                                                    <img src="assets/imgs/pages/data-analysis/page-child/img-4.png" alt="BooSkills" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="text-primary fs-6 fw-regular">WHO WE ARE</span>
                                                <h3 className="text-anime-style-2 pt-3">Revolutionize Your Web Knowledge</h3>
                                                <p className="py-3">Most up-to-date course created after release of WordPress 5.0 will give you the necessary skills to create professional plugins that are secure and fast. Learn how to do it faster, smarter, easier.</p>
                                                <Link href="mailto:info@booskills.com" className="btn btn-primary hover-up">
                                                    <span>info@booskills.com</span>
                                                </Link>
                                                <div className="d-flex flex-md-nowrap flex-wrap gap-5 align-items-center mt-5">
                                                    <div className="col-lg-3 d-flex flex-column">
                                                        <h2 className="count mt-4 mb-1 text-nowrap">
                                                            <span className="odometer text-nowrap" data-count={500} />+
                                                        </h2>
                                                        <p className="wow img-custom-anim-left">Happy Students</p>
                                                    </div>
                                                    <div className="col-lg-3 d-flex flex-column">
                                                        <h2 className="count mt-4 mb-1 text-nowrap">
                                                            <span className="odometer text-nowrap" data-count={10} />+
                                                        </h2>
                                                        <p className="wow img-custom-anim-left">Years Experience</p>
                                                    </div>
                                                    <div className="col-lg-3 d-flex flex-column">
                                                        <h2 className="count mt-4 mb-1">
                                                            <span className="odometer text-nowrap" data-count={4} />.5
                                                        </h2>
                                                        <p className="wow img-custom-anim-left">Average Rating</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab" tabIndex={0}>
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="position-relative rounded-4 zoom-img overflow-hidden d-inline-flex">
                                                    <img src="assets/imgs/pages/data-analysis/page-child/img-4.png" alt="BooSkills" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="text-primary fs-6 fw-regular">BEST INSTRUCTOR</span>
                                                <h3 className="text-anime-style-2 pt-3">Rao Abid Ali - WordPress Expert</h3>
                                                <p className="py-3">Abid has life long experience coding and designing wordpress plugins and themes. He has coded some of the best costume plugins and solutions for his clients. He wanted to share his knowledge with wordpress coding beginners to help them achieve what they want in no time and help them deliver their projects fast.</p>
                                                <Link href="mailto:info@booskills.com" className="btn btn-primary hover-up">
                                                    <span>info@booskills.com</span>
                                                </Link>
                                                <div className="d-flex flex-md-nowrap flex-wrap gap-5 align-items-center mt-5">
                                                    <div className="col-lg-3 d-flex flex-column">
                                                        <h2 className="count mt-4 mb-1 text-nowrap">
                                                            <span className="odometer text-nowrap" data-count={10} />+
                                                        </h2>
                                                        <p className="wow img-custom-anim-left">Years Coding</p>
                                                    </div>
                                                    <div className="col-lg-3 d-flex flex-column">
                                                        <h2 className="count mt-4 mb-1 text-nowrap">
                                                            <span className="odometer text-nowrap" data-count={100} />+
                                                        </h2>
                                                        <p className="wow img-custom-anim-left">Projects Done</p>
                                                    </div>
                                                    <div className="col-lg-3 d-flex flex-column">
                                                        <h2 className="count mt-4 mb-1 text-nowrap">
                                                            <span className="odometer text-nowrap" data-count={500} />+
                                                        </h2>
                                                        <p className="wow img-custom-anim-left">Students</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-expertise" role="tabpanel" aria-labelledby="nav-expertise-tab" tabIndex={0}>
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="position-relative rounded-4 zoom-img overflow-hidden d-inline-flex">
                                                    <img src="assets/imgs/pages/data-analysis/page-child/img-4.png" alt="BooSkills" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className="text-primary fs-6 fw-regular">COURSE FEATURES</span>
                                                <h3 className="text-anime-style-2 pt-3">Interactive & Practice-Based Learning</h3>
                                                <p className="py-3">Learn professional WordPress Plugin development through easy to understand, interactive learning with practice based exercises and project based experience. Master skills to become a Plugin Developer for a CMS that powers more than 30% of the entire internet.</p>
                                                <Link href="/buy-course" className="btn btn-primary hover-up">
                                                    <span>View Course</span>
                                                </Link>
                                                <div className="d-flex flex-md-nowrap flex-wrap gap-5 align-items-center mt-5">
                                                    <div className="col-lg-4 d-flex flex-column">
                                                        <p className="wow img-custom-anim-left fw-bold text-dark">Easy to Understand</p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex flex-column">
                                                        <p className="wow img-custom-anim-left fw-bold text-dark">Practice Based</p>
                                                    </div>
                                                    <div className="col-lg-4 d-flex flex-column">
                                                        <p className="wow img-custom-anim-left fw-bold text-dark">Project Experience</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
