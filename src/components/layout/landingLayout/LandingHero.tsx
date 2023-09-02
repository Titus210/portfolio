
/* 
   Landing Hero 
        - This is initial hero page rendered 
 */



const LandingHero = () => {
    return (
        <>
            <div className="landing-hero ">
                <div className="container">
                    {/*image */}
                    <div className="image"></div>
                    {/*content */}
                    <div className="content">
                        <div className="">
                            <p className="text-xl">Hello I'm <span>Titus Kiplagat</span></p>
                        </div>
                        <div className="mx-2">
                            <h1 className="text-3xl">FrontEnd Developer</h1>
                        </div>
                        
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingHero;
