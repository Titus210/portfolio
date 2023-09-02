import Heading from "../../common/Section/Heading";
import ExpertiseCards from "../../ui/cards/ExpertiseCards";

const Expertise = () => {
    return (
        <>
            <div className="landing-about flex justify-center items-center  h-screen bg-slate-400">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Heading headingText="About" />
                    </div>
                    <div className="content">
                        <div className="cards">
                            <ExpertiseCards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Expertise;