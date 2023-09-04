import ContactInfo from "../../ui/cards/contact/ContactInfo";
import ContactInput from "../../ui/inputs/ContactForm";

const LandingContact = () => {
    return (
        <>
            <div className="w-full flex justify-evenly ">
                <div className="flex w-11/12 justify-evenly flex-col items-center md:flex-row">
                    <div className="contact-info mr-12">
                        <ContactInfo />
                    </div>
                    <div className="contact-info w-11/12  md:w-6/12 lg:w-4/12">
                        <ContactInput />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingContact;