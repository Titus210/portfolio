import { SiTailwindcss } from 'react-icons/si'
import { BiLogoReact } from 'react-icons/bi'
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { PiFigmaLogoFill } from 'react-icons/pi';

import PrimaryButton from '../../ui/buttons/PrimaryButton';
import { Link } from 'react-router-dom';


const LandingAbout = () => {
    return (
        <>
            <div className="landing-about h-full flex flex-col  justify-center items-center ">

                <div className="flex flex-col w-11/12 mx-auto p-6 items-center justify-between  ">
                    <div className="content flex  justify-between flex-col lg:flex-row md:flex-row">
                        <div className="text md:w-6/12 flex flex-col ">
                            <h3 className="text-text-secondary text-2xl font-semibold">Get to Know me!</h3>

                            <div className="text-md text-slate-300 md:text-lg mt-4">
                                <p>
                                    I’m a Fronend Web Developer building Front-End websites and webapplications</p>
                                <p className="my-4">
                                    I also share web development related content that i have learned over the years in web development. Feel free to follow me on my
                                    <span className='text-primaryLight'><Link to='/'> Linkedin,</Link></span> and
                                    <span className='text-primaryLight'><Link to='/'> Hashnode,</Link></span> where   i post usefull content
                                </p>
                                <p>
                                    I am open to job opportunities where I can
                                    contribute, learn and grow If you have a good opportunity that mathes my skilla ans experience dont hesitate to
                                    <span className='text-primaryLight '><Link to='/'> contact me</Link></span>
                                </p>
                            </div>
                        </div>
                        <div className="skills mt-4 md:mt-0 w md:w-5/12 ">
                            <div className="">
                                <h3 className="text-2xl text-text-secondary font-semibold">Tech Stack</h3>

                                <div className="card flex flex-wrap gap-3 p-4">
                                    <article className='flex flex-col items-center justify-center  px-12 w-5/12 md:w-3/12 rounded-md hover:bg-slate-500   '>
                                        <BiLogoReact className="text-primary w-8 h-8" />
                                        <p className="text-md">React</p>
                                    </article>
                                    <article className='flex flex-col items-center justify-center w-5/12 md:w-3/12 p-4 rounded-md   hover:bg-slate-500   '>
                                        <SiTailwindcss className="text-primary w-8 h-8" />
                                        <p className="text-md">Tailwindcss</p>
                                    </article>
                                    <article className='flex flex-col items-center justify-center w-5/12 md:w-3/12 p-4 rounded-md hover:bg-slate-500    '>
                                        <DiJavascript1 className="text-yellow-300 w-8 h-8" />
                                        <p className="text-md">Javascript</p>
                                    </article>

                                    <article className='flex flex-col items-center justify-center  px-12 w-5/12  md:w-3/12 rounded-md hover:bg-slate-500  '>
                                        <BiLogoTypescript className="text-primary w-8 h-8" />
                                        <p className="text-md">Typescript</p>
                                    </article>
                                    <article className='flex flex-col items-center justify-center  w-5/12  md:w-3/12   p-4 rounded-md   hover:bg-slate-500   '>
                                        <SiTailwindcss className="text-primary w-8 h-8" />
                                        <p className="text-md">Tailwindcss</p>
                                    </article>
                                    <article className='flex flex-col items-center justify-center  w-5/12  md:w-3/12   p-4 rounded-md hover:bg-slate-500    '>
                                        <PiFigmaLogoFill className="text-red-400 w-8 h-8" />
                                        <p className="text-md">Figma</p>
                                    </article>
                                </div>

                            </div>
                            <div className="">
                                <PrimaryButton text="View More" color="text-white" />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}


export default LandingAbout;
