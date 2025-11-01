import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*buy-course section 1 - Course Hero*/}
            <section className="data-analysis-services-section-1 position-relative overflow-hidden pb-120 pt-120">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-8 mx-lg-auto text-center">
                            <span className="btn-text text-primary">WordPress Plugin Development</span>
                            <h1 className="text-dark my-3 text-anime-style-3">WordPress Plugin Development Using Boilerplate</h1>
                            <p className="fs-5 mb-4">
                                Build plugins for your client for WordPress plugin repository or premium plugins that you want to sell on marketplaces
                            </p>
                            <div className="d-flex justify-content-center gap-4 mb-4">
                                <span className="btn-text">101 lectures</span>
                                <span className="btn-text">more than 12 hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

