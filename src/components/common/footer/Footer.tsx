import { PiGithubLogoFill, PiLinkedinLogo } from "react-icons/pi";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
    return (
        <>
            <div className="bg-secondaryBg   py-4">
                <div className="flex flex-col   mx-auto justify-between items-center md:flex-row  md:w-8/12">
                    <div className="text w-9/12 md:w-7/12">
                        <h2 className="text-secondary font-semibold text-xl">Titus Kiplagat</h2>
                        <p className="text-md text-white">A frontend web developer Bulding FrontEnd Websites and Web Applications</p>
                    </div>
                    <div className="socials flex  items-center mt-5 md:mt-0">
                        <div className="linkedIn flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-slate-500">
                            <PiLinkedinLogo className="w-7 h-7 hover:scale-125" />
                        </div>
                        <div className="github mx-4 flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-slate-500">
                            <PiGithubLogoFill className="w-7 h-7 hover:scale-125" />
                        </div>
                        <div className="hashnode flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-slate-500">
                            <SiHashnode className="w-7 h-7 hover:scale-125" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Footer;