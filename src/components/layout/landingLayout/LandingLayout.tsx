import Heading from "../../common/Section/Heading";
// import Expertise from "./Expertise";
import LandingAbout from "./LandingAbout";
import LandingBlogs from "./LandingBlogs";
import LandingContact from "./LandingContact";
import LandingHero from "./LandingHero";
import LandingProjects from "./LandingProjects";


/**
 * LandingLayout Component:
 *
 * The LandingLayout component represents the layout structure of the landing page. It includes sections for:
 *
 * - Hero (Introduction)
 * - About
 * - Projects
 * - Blogs
 * - Contact
 *
 * Key Points:
 * - Each section corresponds to a specific component (e.g., LandingHero, LandingAbout).
 * - Section headings and content are organized with appropriate margins and styling.
 *
 * Note:
 * - The "Expertise" section is currently commented out but can be uncommented if needed.
 *
 * Suggestions:
 * - Populate each section with dynamic content as necessary (e.g., actual text, project information).
 *
 * Overall, the component provides a structured layout for the landing page.
 */


const LandingLayout = () => {
    return (
        <>
            <main className="">
                <div>
                    {/*Hero*/}
                    <section className="bg-primaryBg flex justify-center items-center ">
                        <LandingHero />
                    </section>

                    {/* About */}
                    <section className=" h-max py-6">
                        <div className="flex items-center  justify-center mb-6 md:mb-12">
                            <Heading headingText="About" />
                        </div>
                        <div className="page-container   flex items-center justify-center">
                            <LandingAbout />
                        </div>
                    </section>

                    {/*Expertise */}
                    {/* <section className="background-2 bg-secondaryBg">
                        <Expertise />
                    </section> */}

                    {/*Projects */}
                    <section className="bg-primaryBg py-6 h-full">
                        <div className="flex items-center  justify-center mb-6 md:mb-12">
                            <Heading headingText="Projects" />

                        </div>
                        <div className="page-container   flex items-center justify-center">
                            <LandingProjects />
                        </div>
                    </section>

                    {/* Blogs */}
                    <section className="bg-secondaryBg py-6  h-full">
                        <div className="flex items-center  justify-center mb-6 md:mb-12">
                            <Heading headingText="My Blogs" />
                        </div>
                        <div className="page-container   flex items-center justify-center">
                            <LandingBlogs />
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="bg-primaryBg h-max py-8">
                        <div className="flex flex-col items-center  justify-center mb-6 md:mb-12">
                            <Heading headingText="Contact" />
                            <h2 className="text-sm mt-2">
                                Feel free to get in touch
                            </h2>
                        </div>
                        <div className="page-container flex items-center justify-center">
                            <LandingContact />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default LandingLayout;



