import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import Expertise from "./Expertise";
import LandingAbout from "./LandingAbout";
import LandingBlogs from "./LandingBlogs";
import LandingContact from "./LandingContact";
import LandingHero from "./LandingHero";
import LandingProjects from "./LandingProjects";

const LandingLayout = () => {
    return (
        <>
            <main className="landing">
                <div>

                    {/* Navbar */}
                    <section className="background-1 bg-primaryBg">
                        <Navbar />
                    </section>

                    {/*Hero*/}
                    <section className="background-2 bg-secondaryBg">
                        <LandingHero />
                    </section>

                    {/* About */}
                    <section className="background-1 bg-primaryBg">
                        <LandingAbout />
                    </section>

                    {/*Expertise */}
                    <section className="background-2 bg-secondaryBg">
                        <Expertise />
                    </section>

                    {/*Projects */}
                    <section className="background-1 bg-primaryBg">
                        <LandingProjects />
                    </section>

                    {/* Blogs */}
                    <section className="background-2 bg-secondaryBg">
                        <LandingBlogs />
                    </section>

                    {/* Contact */}
                    <section className="background-1 bg-primaryBg">
                        <LandingContact />
                    </section>

                    {/*Footer */}
                    <section className="background-2 bg-secondaryBg">
                        <Footer />
                    </section>
                </div>
            </main>
        </>
    );
}

export default LandingLayout;



