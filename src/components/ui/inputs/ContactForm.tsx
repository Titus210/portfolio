import SecondaryButton from "../buttons/SecondaryButton";

const ContactInput = () => {
    return (
        <>
            <div className="p-4 rounded-sm bg-secondaryBg">
                <form action="" className="">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-md mb-2 text-secondary font-semibold" >Name</label>
                        <input type="text" name="username" id="username" className="outline-none px-2 text-gray-600 py-1 bg-slate-400 rounded-sm" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="email" className="text-md  mb-2 text-secondary font-semibold" >Email</label>
                        <input type="text" name="email" id="email" className="outline-none px-2 py-1 text-gray-600 bg-slate-400 rounded-sm" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email" className="text-md  mb-2 text-secondary font-semibold" >Messages</label>
                        <textarea id="message" className="h-24 outline-none text-gray-600 bg-slate-400 p-2" />
                    </div>
                    <div className="mx-auto mt-2 md:w-6/12 self-end">
                        <SecondaryButton text="Submit" color="text-white" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactInput;    