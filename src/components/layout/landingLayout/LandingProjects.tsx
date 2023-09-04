import "../../../assets/styles/Landing/landingProjects.css"

import PrimaryButton from "../../ui/buttons/PrimaryButton";
import SecondaryButton from "../../ui/buttons/SecondaryButton";

const LandingProjects = () => {

    return (
        <>
            <div className="landing-about   w-full ">
                <div className="flex flex-col  justify-between w-12/12  mx-auto ">
                    <div className="content">
                        <div className="projectItems w-full  mx-auto mt-4  flex flex-col justify-between p-4 md:w-11/12 lg:flex-row ">
                            <div className="project flex flex-col items-center justify-evenly p-2    md:w-full md:flex-row lg:w-7/12 ">
                                <div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            <span className="text-secondary font-semibold"> 1. </span>
                                            GreenMart
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <div className="image-wrapper py-3 flex">
                                            <div className="image image-projects w-11/12 mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details mt-4 ">
                                    <div className="flex ">
                                        <p>
                                            <SecondaryButton color="text-white" text="Github" />
                                        </p>
                                        <p className="mx-2">

                                            <SecondaryButton color="text-white" text="View Site" />
                                        </p>
                                        <p>
                                            <SecondaryButton color="text-white" text="Design" />
                                        </p>
                                    </div>
                                    <div className="b flex flex-col mt-4">
                                        <h4 className="text-xl font-semibold text-text-secondary">Tools</h4>
                                        <ul className="ml-6">
                                            <li className="ml-4 text-text-primary list-disc">Reactjs</li>
                                            <li className="ml-4 text-text-primary list-disc">Tailwind css</li>
                                            <li className="ml-4 text-text-primary list-disc">Typescript</li>
                                            <li className="ml-4 text-text-primary list-disc">Redux</li>
                                            <li className="ml-4 text-text-primary list-disc">Firebase</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <PrimaryButton color="text-white" text="View Project" />
                                    </div>
                                </div>
                            </div>
                            <div className="other-projects mt-4 p-4  md:mt-0">
                                <h4 className="text-xl font-semibold  mb-4">Other Projects</h4>
                                <div className="category flex p-2 ">
                                    <p>
                                        <PrimaryButton text="Frontend" color="text-white" />
                                    </p>
                                    <p className="ml-4">
                                        <SecondaryButton text="UI Design" color="text-white" />
                                    </p>
                                </div>

                                <div className="cards flex flex-wrap gap-3 items-center justify-center my-4">
                                    <article className="w-5/12 border shadow-sm  h-24 flex items-center justify-center rounded-lg ">
                                        <h2 className="text-lg text-secondary font-semibold">Devcafe</h2>
                                    </article>
                                    <article className="w-5/12 border shadow-sm  h-24 flex items-center justify-center rounded-lg ">
                                        <h2 className="text-lg text-secondary font-semibold">Devcafe</h2>
                                    </article>
                                    <article className="w-5/12 border shadow-sm  h-24 flex items-center justify-center rounded-lg ">
                                        <h2 className="text-lg text-secondary font-semibold">Devcafe</h2>
                                    </article>
                                    <article className="w-5/12 border shadow-sm  h-24 flex items-center justify-center  rounded-lg">
                                        <h2 className="text-lg text-secondary font-semibold">Devcafe</h2>
                                    </article>
                                </div>
                                <div className="category flex p-2 ">
                                    <p className="w-11/12 mx-auto">
                                        <PrimaryButton text="All Projects" color="text-white" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default LandingProjects;