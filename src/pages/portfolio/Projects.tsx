import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import ProjectsLayout from "../../components/layout/projectLayout/ProjectLayout";

const Projects = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Projects layout */}
            <ProjectsLayout />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Projects;