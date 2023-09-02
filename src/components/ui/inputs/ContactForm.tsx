const ContactInput = () => {
    return (
        <>
            <div>
                <form action="">
                    <div className="">
                        <label htmlFor="username">Name</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="">
                        <label htmlFor="message">Name</label>
                        <textarea id="message" />
                    </div>
                    <div>
                        <p>Submit</p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactInput;    