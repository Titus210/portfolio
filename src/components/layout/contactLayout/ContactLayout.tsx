import ContactInfo from "../../ui/cards/contact/ContactInfo";
import ContactInput from "../../ui/inputs/ContactForm";

/**
 * ContactLayout Component:
 *
 * The ContactLayout component represents the layout of the Contact page, which includes two main sections:
 *
 * 1. Contact Information: Displays contact details using the ContactInfo component.
 * 2. Contact Form: Displays a contact input form using the ContactInput component.
 *
 * Key Points:
 * - The layout is designed to be responsive, adjusting to different screen sizes.
 * - Contact Information and Contact Form are displayed side by side on larger screens and stacked on smaller screens.
 *
 * Suggestions:
 * - Ensure that the layout maintains a balanced design across different screen sizes.
 * - Check responsiveness by testing on various devices.
 *
 * Overall, the component efficiently organizes contact-related content and maintains responsiveness.
 */

const ContactLayout = () => {
    return (
        <>
            <div className="w-full flex justify-evenly h-screen">
                <div className="flex w-11/12 justify-evenly flex-col-reverse items-center md:flex-row-reverse">
                    <div className="contact-info mr-12">
                        <ContactInfo />
                    </div>
                    <div className="contact-info w-11/12 md:w-6/12 lg:w-4/12">
                        <ContactInput />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactLayout;
