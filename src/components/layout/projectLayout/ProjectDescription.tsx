import { SiTailwindcss } from 'react-icons/si'
import { BiLogoReact } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { PiFigmaLogoFill } from 'react-icons/pi';

import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { Link } from 'react-router-dom';

/**
 * ProjectDescription Component:
 *
 * The ProjectDescription component provides information about the developer and the tools used for a project.
 * It includes the following elements:
 *
 * - Project Description: Describes the developer's background, interests, and job opportunities.
 * - Tools Used: Displays a list of tools and technologies used in the project.
 * - "View More" Button: Allows users to access additional information.
 *
 * Key Points:
 * - The component layout is responsive, adapting to different screen sizes.
 * - Icons and text are used to represent and describe tools and technologies.
 * - Links to social profiles and the contact page are included.
 *
 * Suggestions:
 * - Ensure that the "View More" button is linked to the appropriate content.
 * - Consider adding transitions or hover effects for a more interactive UI.
 *
 * Overall, the component effectively communicates information about the developer and the project's tools.
 */

const ProjectDescription = () => {
    return ( 
        <div className="landing-about h-full flex flex-col justify-center items-center">
            <div className="flex flex-col w-11/12 mx-auto p-6 items-center justify-between">
                <div className="content flex justify-between flex-col lg:flex-row md:flex-row">
                    <div className="text md:w-6/12 flex flex-col">
                        <h3 className="text-text-secondary text-2xl font-semibold">Project Description</h3>
                        <div className="text-md text-slate-300 md:text-lg mt-4">
                            <p>
                                I’m a Frontend Web Developer building Front-End websites and web applications.
                            </p>
                            <p className="my-4">
                                I also share web development-related content that I have learned over the years in web development.
                                Feel free to follow me on my
                                <span className='text-primaryLight'><Link to='/'> LinkedIn,</Link></span> and
                                <span className='text-primaryLight'><Link to='/'> Hashnode,</Link></span> where I post useful content.
                            </p>
                            <p>
                                I am open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity
                                that matches my skills and experience, don't hesitate to
                                <span className='text-primaryLight'><Link to='/'> contact me.</Link></span>
                            </p>
                        </div>
                    </div>
                    <div className="skills mt-4 md:mt-0 w md:w-5/12">
                        <div className="">
                            <h3 className="text-2xl text-text-secondary font-semibold">Tools Used</h3>
                            <div className="card flex flex-wrap gap-3 p-4">
                                <article className='flex flex-col items-center justify-center px-12 w-5/12 md:w-3/12 rounded-md hover:bg-slate-500'>
                                    <BiLogoReact className="text-primary w-8 h-8" />
                                    <p className="text-md">React</p>
                                </article>
                                {/* Add similar blocks for other tools */}
                            </div>
                        </div>
                        <div className="">
                            <PrimaryButton text="View More" color="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;
