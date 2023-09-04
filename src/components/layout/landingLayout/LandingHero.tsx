
import { RiLinkedinFill } from 'react-icons/ri';
import {AiFillGithub} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'

import PrimaryButton from "../../ui/buttons/PrimaryButton";
import '../../../assets/styles/Landing/landingAbout.css'
import SecondaryButton from '../../ui/buttons/SecondaryButton';


/**
 * LandingHero Component:
 *
 * The LandingHero component represents the hero section of a landing page. It includes the following elements:
 *
 * - A circular image placeholder (or image) for the user's profile picture.
 * - Information about the user, including their name and role as a FrontEnd Developer.
 * - Buttons for downloading the CV and accessing the user's work.
 * - Social media icons for LinkedIn, GitHub, and Hashnode.
 *
 * Key Points:
 * - The hero section is centered using flex layout for both mobile and desktop views.
 * - The user's name is emphasized with a font-weight of "font-semibold."
 * - Buttons are provided with primary and secondary styles for clear calls to action.
 * - Social media icons are displayed with white color and appropriate sizing.
 *
 * Suggestions:
 * - Replace the image placeholder with the user's actual profile picture.
 * - Make the buttons functional by adding appropriate click actions.
 * - Link the social media icons to the user's profiles.
 *
 * Overall, the component structure and code organization follow best practices for a landing page hero section.
 */


const LandingHero = () => {
    return (
        <>
            <div className="landing-hero  md:w-11/12 mx-auto  ">
                <div className="container flex  flex-col items-center py-4 justify-evenly   md:flex-row">
                    {/*image */}
                    <div className="image-hero rounded-full h-52 w-52 bg-slate-600 mb-12 md:mb-0 md:h-80 md:w-80">
                        {/* <img src="./my-bg.png" alt="Titus kiplagat" className="w-full h-full" /> */}
                    </div>
                    {/*content */}
                    <div className="content flex flex-col items-center">
                        <div className="">
                            <p className="text-xl">Hello I'm <span className="text-text-secondary font-semibold">Titus Kiplagat</span></p>
                        </div>
                        <div className="my-4">
                            <h1 className="text-2xl font-semibold md:text-4xl">FrontEnd Developer</h1>
                        </div>
                        <div className="flex ">
                            <p>
                                <PrimaryButton text='Download CV' color='text-white' />
                            </p>
                            <p className="ml-4 ">
                                <SecondaryButton text='My Work' color='text-white' />
                            </p>
                        </div>
                        <div className="social-icons mt-4 flex">
                            <div className="linkedin">
                                <p className="text-white">
                                    <RiLinkedinFill className='w-8 h-8' />
                                </p>
                            </div>
                            <div className="github mx-3">
                                <p className="text-white">
                                    <AiFillGithub className='w-8 h-8'/>
                                </p>
                            </div>
                            <div className="">
                                <p className="text-white">
                                    <SiHashnode className='w-8 h-8'/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingHero;
