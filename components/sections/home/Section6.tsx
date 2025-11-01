"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section6() {
    return (
        <>
            {/*data-analysis-home section 6*/}
            <section className="data-analysis-home-section-6 position-relative overflow-hidden pt-120">
                <div className="custom-container bg-primary position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle-x w-100 z-0">
                        <img className="w-100" src="assets/imgs/pages/data-analysis/page-home/home-section-6/dot-map.png" alt="BooSkills Course Testimonials" />
                    </div>
                    <div className="container py-120 position-relative z-1">
                        <div className="row">
                            <div className="text-center pb-7">
                                <span className="btn-text text-white">testimonials</span>
                                <h2 className="text-white text-anime-style-2">What They Say</h2>
                                <p className="text-white mt-3">Some learners are really happy with our course on udemy.com - "WordPress Plugin Development using Boilerplate"</p>
                            </div>
                        </div>
                        <div className="row">
                            {/* Swiper */}
                            <Swiper {...swiperOptions} className="swiper slider-1">
                                <div className="swiper-wrapper z-1">
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" I am not even half done but the narration and course structure seems perfect for me. Value for money & Highly recommended course to have. "</h5>
                                                    <div className="text-start mt-3">
                                                        <span className="btn-text">Swathy AP</span>
                                                        <p className="fs-7">Student, Udemy</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" Solid course for sure - focusing on WordPress Boilerplate, you'll get a great overview on plugin development through an Object-Oriented-Programming Approach. "</h5>
                                                    <div className="text-start mt-3">
                                                        <span className="btn-text">Rand Stephens</span>
                                                        <p className="fs-7">Student, Udemy</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-md-10 col-12 mx-auto card-testimonial bg-white p-5 pb-0 rounded-4" data-aos="fade-up">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="d-flex gap-2">
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                        <i className="bi bi-star-fill text-primary fs-7" />
                                                    </div>
                                                    <h5 className="mt-3 pb-7 border-bottom">" This course is very good. Here you get teached how a Professional Plugin works. It is good for Advanced or Professional Developer to get better Skills. "</h5>
                                                    <div className="text-start mt-3">
                                                        <span className="btn-text">Onder Tekcam</span>
                                                        <p className="fs-7">Student, Udemy</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="swiper-button-prev mt-0 rounded-4 border-opacity-25 border-white border-2 icon-shape icon-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_349_1382)">
                                            <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="swiper-button-next mt-0 rounded-4 border-opacity-25 border-white border-2 icon-shape icon-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_349_1381)">
                                            <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </Swiper>
                            {/* Swiper JS */}
                            <span className="btn-text text-center text-white text-opacity-75 mt-8">
                                Join 500+ students who already started learning WordPress development.
                                <Link href="/buy-course">
                                    <span className="btn-text text-white">view course</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
