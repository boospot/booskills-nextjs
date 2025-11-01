import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*data-analysis-home section 5*/}
            <section className="data-analysis-home-section-5 position-relative overflow-hidden py-100">
                <div className="container">
                    <div className="text-center mb-80">
                        <span className="btn-text text-primary">Course Features</span>
                        <h2 className="mb-0 text-anime-style-2">
                            Why Choose <br />
                            BooSkills?
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="card-team hover-up">
                                <div className="card-team-content mt-3 text-center">
                                    <h6 className="mb-2">Easy to Understand</h6>
                                    <p className="mb-0">Content designed for beginners with clear explanations and step-by-step guidance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="card-team hover-up">
                                <div className="card-team-content mt-3 text-center">
                                    <h6 className="mb-2">Practice Based</h6>
                                    <p className="mb-0">Learn through hands-on exercises and real-world examples that reinforce concepts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                            <div className="card-team hover-up">
                                <div className="card-team-content mt-3 text-center">
                                    <h6 className="mb-2">Project Experience</h6>
                                    <p className="mb-0">Build complete plugins from scratch and gain practical experience you can use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
