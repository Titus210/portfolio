import Heading from "../../common/Section/Heading";

const LandingAbout = () => {
    return (
        <>
            <div className="landing-about flex justify-center items-center  h-screen bg-slate-400">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Heading headingText="About" />
                    </div>
                    <div className="content">
                        <div className="text">
                            <h3>Get to Know me!</h3>
                            <p> I’m a Fronend Web Developer building Front-End websites and webapplications</p>
                            <p>
                                I also share web development related content that i have learned over  the years in web development. Feel free to follow me on my Linedin and Hashnode where   i post usefull content
                            </p>
                            <p>
                                I am open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that mathes my skilla ans experience dont hesitate
                            </p>
                        </div>
                        <div className="cards">
                            <div className="">
                                <div className="card"></div>
                                <div className="card"></div>
                            </div>
                            <div className="">
                                {/* <Button></Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default LandingAbout;