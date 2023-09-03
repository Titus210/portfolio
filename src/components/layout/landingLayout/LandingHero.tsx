
/* 
   Landing Hero 
        - This is initial hero page rendered 
 */

import { RiLinkedinFill } from 'react-icons/ri';
import {AiFillGithub} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'

import PrimaryButton from "../../ui/buttons/PrimaryButton";
import '../../../assets/styles/Landing/landingAbout.css'


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
                                <PrimaryButton text='Download cv' color='text-white' />
                            </p>
                            <p className="ml-4 ">
                                <PrimaryButton text='My Work' color='text-white' />
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
