import PrimaryButton from "../../ui/buttons/PrimaryButton";
import SecondaryButton from "../../ui/buttons/SecondaryButton";

import { AiFillGithub } from 'react-icons/ai'
import { SiHashnode } from 'react-icons/si'

/**
 * ProjectHero Component:
 *
 * The ProjectHero component represents the hero section of a project page. It includes the following elements:
 *
 * - Project Image: A placeholder for the project image, currently commented out.
 * - Project Title: Displays the title of the project.
 * - Buttons: Includes "View Site" and "Project" buttons using PrimaryButton and SecondaryButton components.
 * - Social Icons: Displays GitHub and Hashnode icons for project-related social links.
 *
 * Key Points:
 * - The layout is designed to be responsive, adjusting to different screen sizes.
 * - Buttons are styled using PrimaryButton and SecondaryButton components for consistency.
 *
 * Suggestions:
 * - Consider uncommenting and integrating the project image for a complete visual representation.
 * - Ensure that social icons are linked to the appropriate profiles.
 *
 * Overall, the component efficiently organizes project-related content and maintains responsiveness.
 */

const ProjectHero = () => {
    return (
        <>
            <div className="landing-hero md:w-11/12 mx-auto">
                <div className="container flex flex-col items-center py-4 justify-evenly md:flex-row">
                    {/* Image */}
                    <div className="image-hero rounded-lg h-52 w-52 bg-slate-600 mb-12 md:mb-0 md:h-80 md:w-80">
                        {/* Placeholder for project image */}
                        {/* <img src="./my-bg.png" alt="Titus kiplagat" className="w-full h-full" /> */}
                    </div>
                    {/* Content */}
                    <div className="content flex flex-col items-center">
                        <div className="my-4">
                            <h1 className="text-2xl font-semibold md:text-4xl">GreenMart</h1>
                        </div>
                        <div className="flex">
                            <p>
                                <PrimaryButton text='View Site' color='text-white' />
                            </p>
                            <p className="ml-4">
                                <SecondaryButton text='Project' color='text-white' />
                            </p>
                        </div>
                        <div className="social-icons mt-4 flex">
                            <div className="github mx-3">
                                <p className="text-white">
                                    <AiFillGithub className='w-8 h-8' />
                                </p>
                            </div>
                            <div className="">
                                <p className="text-white">
                                    <SiHashnode className='w-8 h-8' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectHero;
