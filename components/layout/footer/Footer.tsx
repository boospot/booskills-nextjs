import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer>
                <div className="section-footer-6 position-relative">
                    <div className="container-fluid">
                        <div className="container position-relative z-2">
                            <div className="row pb-120 pt-120">
                                <div className="col-lg-4 col-md-6 mb-5">
                                    <Link className="d-flex gap-2 mb-4" href="/">
                                        <img src="/booskills-logo-white-2.svg" alt="BooSkills" width="140" height="73" style={{maxWidth: "140px"}} />
                                    </Link>
                                    <p className="text-white opacity-75 mb-4">
                                        Most up-to-date course created after release of WordPress 5.0 will give you the necessary skills to create professional plugins that are secure and fast.
                                    </p>
                                    <ul className="list-unstyled d-flex mb-0 gap-3">
                                        <li>
                                            <Link href="https://web.facebook.com/rao.abidali.7982" target="_blank" rel="noopener noreferrer" style={{padding: "7px", display: "inline-block"}}>
                                                <span className="icon" style={{width: "18px", height: "18px", display: "inline-block"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="18" height="18">
                                                        <path className="fill-white" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://twitter.com/RaoAbidDev" target="_blank" rel="noopener noreferrer" style={{padding: "7px", display: "inline-block"}}>
                                                <span className="icon" style={{width: "18px", height: "18px", display: "inline-block"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18">
                                                        <path className="fill-white" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://profiles.wordpress.org/boospot/" target="_blank" rel="noopener noreferrer" style={{padding: "7px", display: "inline-block"}}>
                                                <i className="bi bi-wordpress" style={{fontSize: "18px", color: "white"}}></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://github.com/boospot" target="_blank" rel="noopener noreferrer" style={{padding: "7px", display: "inline-block"}}>
                                                <span className="icon" style={{width: "18px", height: "18px", display: "inline-block"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18">
                                                        <path className="fill-white" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9c1.4.3 3.6.8 4.5.8c8.9.8 11.3-6.1 11.3-11.5c0-5.6-.2-24.2-.3-42.7c-62.6 13.9-75.7-30.8-75.7-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3 1.5-14 1.5-14c22.5 1.6 34.3 23.7 34.3 23.7c20 35.1 52.4 25 65.2 19.1c2-14.8 7.8-25 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8c0 0 18.7-6.2 61.6 23.5c17.9-5.1 37-7.6 56-7.7c19 .1 38.2 2.6 56 7.7c42.9-29.7 61.5-23.5 61.5-23.5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 2.5 11.5 11.4 11.5c1.2 0 2.6-.1 4-.3C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-6 mb-5 ms-lg-auto">
                                    <h6 className="text-white pb-3">Links</h6>
                                    <div className="d-flex flex-column align-items-start">
                                        <Link href="/">
                                            <p className="hover-effect-1 text-white opacity-75">Home</p>
                                        </Link>
                                        <Link href="/buy-course">
                                            <p className="hover-effect-1 text-white opacity-75">Buy Course</p>
                                        </Link>
                                        <Link href="/about">
                                            <p className="hover-effect-1 text-white opacity-75">About</p>
                                        </Link>
                                        <Link href="/contact">
                                            <p className="hover-effect-1 text-white opacity-75">Hire/Contact</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-4 border-top border-opacity-10 border-white">
                                <p className="text-white opacity-50 mb-0">
                                    &copy; 2025 Booskills, All Rights Reserved |
                                    <Link href="https://booskills.com" className="text-white opacity-75 ms-1">
                                        booskills.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary position-absolute top-0 start-0 w-100 h-100" />
                </div>
            </footer>
        </>
    );
}

