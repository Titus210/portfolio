import Heading from "../../common/Section/Heading";

const LandingProjects = () => {

    return (
        <>
            <div className="landing-about flex justify-center items-center  h-screen bg-slate-400">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Heading headingText="About" />
                    </div>
                    <div className="content">
                        <div className="category">
                            <p>FrontEnd</p>
                            <p>UI Design</p>
                        </div>
                        <div className="projectItems">
                            <div className="project">
                                <div className="image"></div>
                                <div className="details">
                                    <div>
                                        <h3>GreenMart</h3>
                                    </div>
                                    <div>
                                        <p>Github</p>
                                        <p>View Site</p>
                                        <p>Design</p>
                                    </div>
                                    <div>
                                        <h4>Tools</h4>
                                        <ul>
                                            <li>Reactjs</li>
                                            <li>Tailwind css</li>
                                            <li>Typescript</li>
                                            <li>Redux</li>
                                            <li>Firebase</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>View Project</p>
                                    </div>
                                </div>
                            </div>
                            <div className="other-projects">
                                {/*Cards */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingProjects;