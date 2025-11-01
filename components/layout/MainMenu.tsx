import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/buy-course">
                    Buy Course
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/about">
                    About
                </Link>
            </li>
        </ul>
    );
}
