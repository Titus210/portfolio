import { Link } from "react-router-dom";

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    return (
        <>
            <header className="bg-primary  md:p-4 " >
                <div className="logo flex justify-between p-2 mx-auto relative lg:w-8/12">
                    <div className="logo flex ">
                        <h1 className="text-2xl font-bold">Kiplagat</h1>
                    </div>
                    <nav className="flex flex-col p-4 right-0 top-0 text-center  absolute w-7/12 h-72 justify-center bg-primaryLight shadow-sm hidden md:flex-row md:bg-inherit md:w-12/12 md:p-0 md:h-max">
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2 hover:bg-slate-300 md:mb-0"><Link to="/">Home</Link></p>
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2 hover:bg-slate-300 md:mb-0"><Link to="/">About</Link></p>
                        <p className="text-text-primary font-bold text-xl mb-4 md:mr-6 p-2 hover:bg-slate-300 md:mb-0"><Link to="/">Expertise</Link></p>
                        <p className="text-text-primary font-bold text-xl p-2 hover:bg-slate-300 md:mb-0"><Link to="/">Contact</Link></p>
                    </nav>
                </div>
                <div className="menu-bar absolute top-0 right-0 p-2 md:hidden">
                    <p>
                        <BiMenuAltRight className='w-12 h-12 absolute' />
                    </p>
                    <p>
                        <AiOutlineClose className='w-12 h-12 text-white ' />
                    </p>
                </div>
            </header>
        </>
    );
}

export default Navbar;