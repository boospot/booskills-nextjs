import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*data-analysis home section 1*/}
            <section className="data-analysis-home-section-1 position-relative overflow-hidden pt-250">
                <div className="position-absolute top-50 start-50 translate-middle w-100 z-0">
                    <img src="assets/imgs/pages/data-analysis/page-home/home-section-1/img-bg.png" alt="BooSkills WordPress Plugin Development Course" />
                </div>
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <span className="btn-text text-primary">WordPress Plugin Development</span>
                            <h1 className="text-dark my-3 text-anime-style-3 ">Revolutionize Your Web Knowledge</h1>
                            <div className="mb-3">
                                <ul className="list-unstyled d-flex flex-column gap-2">
                                    <li className="d-flex align-items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>easy to understand</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>interactive learning</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>practice based exercises</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <span className="text-primary">•</span>
                                        <span>project based experience</span>
                                    </li>
                                </ul>
                            </div>
                            <p>Most up-to-date course created after release of WordPress 5.0 will give you the necessary skills to create professional plugins that are secure and fast.</p>
                            <div className="d-flex gap-3 mt-4">
                                <Link href="/buy-course" className="btn btn-primary">
                                    View Course
                                </Link>
                                <Link href="/contact" className="btn btn-outline-primary">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 mt-lg-0 mt-8">
                            <div className="parallax-item">
                                <img className="img-fluid" data-aos="zoom-in" src="assets/imgs/pages/data-analysis/page-home/home-section-1/img-1.png" alt="WordPress Plugin Development Learning" />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-200 pb-120 border-bottom position-relative">
                        <div className="d-flex flex-lg-nowrap flex-wrap justify-content-center justify-content-lg-between align-items-center gap-5">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
