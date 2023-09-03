import Heading from "../../common/Section/Heading";
// import Expertise from "./Expertise";
import LandingAbout from "./LandingAbout";
import LandingBlogs from "./LandingBlogs";
import LandingContact from "./LandingContact";
import LandingHero from "./LandingHero";
import LandingProjects from "./LandingProjects";

const LandingLayout = () => {
    return (
        <>
            <main className="">
                <div>
                    {/*Hero*/}
                    <section className="background-2 bg-secondaryBg flex justify-center items-center ">
                        <LandingHero />
                    </section>

                    {/* About */}
                    <section className="background-1  h-max py-12">
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
                    <section className="background-1 bg-primaryBg py-12">
                        <div className="flex items-center  justify-center mb-6 md:mb-12">
                            <Heading headingText="Projects" />
                        </div>
                        <div className="page-container   flex items-center justify-center">
                            <LandingProjects />
                        </div>

                    </section>

                    {/* Blogs */}
                    <section className="background-2 bg-secondaryBg">
                        <LandingBlogs />
                    </section>

                    {/* Contact */}
                    <section className="background-1 bg-primaryBg">
                        <LandingContact />
                    </section>
                </div>
            </main>
        </>
    );
}

export default LandingLayout;



