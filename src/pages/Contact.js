import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {

    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_to29jrk', 'template_ruisbfq', form.current, '-_6WN9kDpyXT6ATIh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setMessage("Thanks! I'll get back to you as soon as I can.")

    };

   
    return (
        <div className="bg-secondary mt-32 mx-auto rounded-lg w-full md:w-4/6 lg:w-2/6">

            {/* Under Construction */}
            <div>
                <p className="bg-quaternary text-primary m-4 px-2 py-1 rounded-lg text-lg text-center">
                    
                    <i className="fa-solid fa-envelope mr-2"></i>
                    <a href="mailto:ggorosave@gmail.com" className="font-semibold">ggorosave@gmail.com</a>
                </p>
            </div>

            <form ref={form} className="bg-tertiary m-4 px-3 py-2 rounded-lg text-primary" onSubmit={sendEmail}>
                <h2 className="text-xl font-bold text-center">Contact</h2>
                <label className="block mb-3">
                    Name:
                    <input name="name" type="text" className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <label className="block mb-3">
                    Email:
                    <input name="email" type="email" className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <label className="block mb-3">
                    Message:
                    <textarea name="message" rows={6} className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <button
                    type="submit"
                    value="Send"
                    className="bg-quaternary px-4 py-1 rounded-2xl w-full font-semibold hover:bg-primary hover:text-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:bg-secondary"
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