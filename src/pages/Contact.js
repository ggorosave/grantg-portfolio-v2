import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {

    const [message, setMessage] = useState('');

    const handleFormSubmit = (event) => {

        event.preventDefault();

        // grabs inputs
        const email = document.getElementsByName('email');
        const userName = document.getElementsByName('userName');
        const userMessage = document.getElementsByName('userMessage');

        // alert the user that the form isn't functional
        if (email && userName && userMessage) {
            setMessage('Sorry! This form doesn\'t work yet. Please email me at ggorosave@gmail.com with any inquiries.')
        }
        
    }

    return (
        <div className="bg-secondary mt-32 mx-auto rounded-lg w-full md:w-4/6 lg:w-2/6">

            {/* Under Construction */}
            <div>
                <p className="bg-quaternary text-primary m-4 px-2 py-1 rounded-lg text-lg">
                    <i class="fa-solid fa-screwdriver-wrench mr-2"></i>
                    This form is still under construction. Check back in a few days. Please email me at <a href="mailto:ggorosave@gmail.com" className="font-semibold">ggorosave@gmail.com</a> with any inquiries.
                </p>
            </div>

            <form className="bg-tertiary m-4 px-3 py-2 rounded-lg text-primary">
                <h2 className="text-xl font-bold text-center">Contact</h2>
                <label className="block mb-3">
                    Name:
                    <input name="userName" type="text" className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <label className="block mb-3">
                    Email:
                    <input name="userEmail" type="email" className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <label className="block mb-3">
                    Message:
                    <textarea name="userMessage" rows={6} className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <button
                    type="submit"
                    className="bg-quaternary px-4 py-1 rounded-2xl w-full font-semibold"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
                {/* Message container */}
                <div className="mt-3">
                    <p
                        className={message !== ''
                            ? "bg-secondary text-quaternary px-3 py-2 rounded-lg"
                            : "none"}
                    >
                        {message}
                    </p>
                </div>
            </form>
        </div>
    )
};