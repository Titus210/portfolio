import { BiEnvelope, BiLocationPlus, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";


/**
 * ContactInput Component:
 *
 * The ContactInput component represents a form for user contact information input. It includes the following fields:
 *
 * 1. Name input field.
 * 2. Email input field.
 * 3. Messages input field (textarea).
 * 4. Submit button.
 *
 * Key Points:
 * - Each input field has a label for clarity.
 * - Styling classes are used for consistent design.
 * - Input fields have appropriate attributes like "name" and "id."
 * - The submit button is a reusable component called SecondaryButton.
 *
 * Suggestions:
 * - Ensure that the form has a proper action attribute pointing to the server-side endpoint.
 * - Implement form validation and error handling if necessary.
 * - Consider adding a "required" attribute to the name and email input fields if they are mandatory.
 * - Make sure that the SecondaryButton component is correctly imported and configured.
 *
 * Overall, the component structure is clean, and it provides a user-friendly interface for contact input.
 */


const ContactInfo = () => {
    return (
        <>
            <div className="flex  flex-col  justify-center p-4">
                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="rounded-full bg-slate-600 p-2">
                            <BiPhone className="text-white" />
                        </p>
                    </div>
                    <div className="">
                        <h4 className="text-lg  font-semibold text-text-secondary">Phone</h4>
                        <p className="text-md text-white">
                            <Link to="">+254 <span>718448019</span></Link>
                        </p>
                    </div>
                </div>
                <div className="flex items-center my-3">
                    <div className="mr-2">
                        <p className="rounded-full bg-slate-600 p-2">
                            <BiEnvelope className="text-white" />
                        </p>
                    </div>
                    <div className="">
                        <h4 className="text-lg    font-semibold text-text-secondary">Email</h4>
                        <p className="text-md text-white">
                            <Link to="">tituskiplagat692@gmail.com</Link>
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="rounded-full bg-slate-600 p-2">
                            <BiLocationPlus className="text-white" />
                        </p>
                    </div>
                    <div className="">
                        <h4 className="text-lg   font-semibold text-text-secondary">Location</h4>
                        <p className="text-md text-white">
                            Nakuru, Kenya
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactInfo;