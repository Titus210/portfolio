
/* 
   Landing Hero 
        - This is initial hero page rendered 
 */

import PrimaryButton from "../../ui/buttons/PrimaryButton";



const LandingHero = () => {
    return (
        <>
            <div className="landing-hero w-11/12  bg-slate-800 mx-auto  ">
                <div className="container flex  flex-col items-center py-4 justify-evenly   md:flex-row">
                    {/*image */}
                    <div className="image rounded-full h-52 w-52 bg-slate-400 mb-12 md:mb-0 md:h-80 md:w-80">
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
                                <PrimaryButton text='Download cv' />
                            </p>
                            <p className="ml-4">
                                <PrimaryButton text='My Work' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingHero;
