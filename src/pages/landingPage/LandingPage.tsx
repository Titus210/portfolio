import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import LandingLayout from "../../components/layout/landingLayout/LandingLayout";

const LandingPage = () => {
    return (
        <>
            {/*Navbar */}
            <Navbar />

            {/* Landing page layout */}
            <LandingLayout />

            {/*Footer */}
            <Footer />
        </>
    );
}

export default LandingPage;