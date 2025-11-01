export default function Section3() {
    return (
        <>
            {/*buy-course section 3 - What's Included*/}
            <section className="data-analysis-pricing-section-1 position-relative overflow-hidden pb-120 pt-120">
                <div className="container">
                    <div className="col-lg-8 mx-lg-auto">
                        <div className="text-center mb-6">
                            <span className="btn-text text-primary">What's Included</span>
                            <h2 className="text-anime-style-2">Course Features</h2>
                        </div>
                        <div className="card-pricing border rounded-3 p-md-5 p-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div>
                                        <ul className="list-unstyled mt-3 mb-0">
                                            <li className="d-flex align-items-center gap-3 py-2">
                                                <i className="fa-solid fa-check text-primary" />
                                                <p className="fs-7 mb-0">12+ Hours of HD Video</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-3 border-top py-2">
                                                <i className="fa-solid fa-check text-primary" />
                                                <p className="fs-7 mb-0">24/7 availability</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <ul className="list-unstyled mt-3 mb-0">
                                            <li className="d-flex align-items-center gap-3 py-2">
                                                <i className="fa-solid fa-check text-primary" />
                                                <p className="fs-7 mb-0">Exercises and Quizzes</p>
                                            </li>
                                            <li className="d-flex align-items-center gap-3 border-top py-2">
                                                <i className="fa-solid fa-check text-primary" />
                                                <p className="fs-7 mb-0">101 lectures</p>
                                            </li>
                                        </ul>
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

