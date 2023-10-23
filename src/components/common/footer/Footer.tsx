import { PiGithubLogoFill, PiLinkedinLogo } from "react-icons/pi";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";


/**
 * Footer Component:
 *
 * This component represents the footer section of the web page. It contains information about the developer
 * and links to their social media profiles.
 *
 * - The background color is set to "bg-secondaryBg" for consistency with the site's design.
 * - The layout is responsive, adjusting between a single column layout on smaller screens and a two-column
 *   layout on medium-sized screens (md:flex-row).
 *
 * Inside the left column (text w-9/12 md:w-7/12):
 * - The developer's name ("Titus Kiplagat") is displayed in a large font size for emphasis.
 * - A brief description of the developer's role as a frontend web developer is provided.
 *
 * Inside the right column (socials):
 * - Social media icons for LinkedIn, GitHub, and Hashnode are displayed with hover effects for interactivity.
 * - These icons are visually appealing and serve as links to the respective profiles.
 *
 * Note:
 * - Consider adding actual links to the social media profiles in the component.
 * - Ensure that hover effects work consistently across different browsers.
 *
 * Overall, the component is well-structured, and the code follows best practices for creating a footer section.
 */


const Footer = () => {
    return (
        <>
            <div className="bg-secondaryBg   py-4">
                <div className="flex flex-col   mx-auto justify-between items-center md:flex-row  md:w-8/12">
                    <div className="text w-9/12 md:w-7/12">
                        <h2 className="text-secondary font-semibold text-xl">Titus Kiplagat</h2>
                        <p className="text-md text-white">A frontend web developer Bulding FrontEnd Websites and Web Applications</p>
                    </div>
                    <div className="socials flex  items-center mt-5 md:mt-0">
                        <div className="linkedIn flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-slate-500">
                            <a href="https://www.linkedin.com/in/titus-kiplagat-5146ba210/">
                                <PiLinkedinLogo className="w-7 h-7 hover:scale-125" />
                            </a>
                        </div>
                        <div className="github mx-4 flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-slate-500">
                            <a href="https://github.com/Titus210">
                                <PiGithubLogoFill className="w-7 h-7 hover:scale-125" />
                            </a>
                        </div>
                        <div className="hashnode flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-slate-500">
                            <a href="https://kiplagatitus.hashnode.dev/">
                                <SiHashnode className="w-7 h-7 hover:scale-125" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Footer;