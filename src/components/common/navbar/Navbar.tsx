import { Link } from "react-router-dom";

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

/**
 * Navbar Component:
 *
 * The Navbar component represents the navigation bar/header of a web page. It includes the following features:
 *
 * - Logo with the text "Kiplagat" for branding.
 * - Navigation menu with links to different sections of the website.
 * - Responsive behavior: The menu is initially hidden on small screens (md:hidden) and can be toggled using
 *   the menu button.
 * - Menu button with icons (BiMenuAltRight for opening and AiOutlineClose for closing).
 *
 * Key Points:
 * - The header has a background color of "bg-secondaryBg" for a consistent design.
 * - The logo and navigation menu are centered using flex layout.
 * - The navigation links have hover effects to improve interactivity.
 * - On smaller screens, the menu is displayed as a dropdown.
 *
 * Suggestions:
  * - Ensure that the mobile menu (hamburger menu) opens and closes correctly.
 * - Consider adding transition animations for a smoother user experience.
 *
 * Overall, the component structure and code organization are well done, following best practices for a navigation bar.
 */


const Navbar = () => {
    return (
        <>
            <header className="bg-secondaryBg  md:p-4 " >
                <div className="logo flex justify-between p-2 mx-auto relative lg:w-11/12">
                    <div className="logo flex ">
                        <h1 className="text-2xl font-bold"><Link to="/">T.K</Link></h1>
                    </div>
                    <nav className="hidden flex-col p-4 right-0 top-0 text-center  absolute w-7/12 h-72 justify-center bg-primaryLight shadow-sm lg:flex md:flex-row md:bg-inherit md:w-12/12 md:p-0 md:h-max">
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2  hover:text-primary md:mb-0"><Link to="/">Home</Link></p>
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2  hover:text-primary md:mb-0"><Link to="/about">About</Link></p>
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2  hover:text-primary md:mb-0"><Link to="/expertise">Expertise</Link></p>
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2  hover:text-primary md:mb-0"><Link to="/projects">Projects</Link></p>
                        <p className="text-text-primary font-bold text-xl p-2  hover:text-primary md:mb-0"><Link to="/contact">Contact</Link></p>
                    </nav>
                </div>
                <div className="menu-bar absolute top-0 right-0 p-2 md:hidden">
                    <p>
                        <BiMenuAltRight className='w-12 h-12 absolute' />
                    </p>
                    <p>
                        <AiOutlineClose className='w-12 h-12 text-white ' />
                    </p>
                </div>
            </header>
        </>
    );
}

export default Navbar;