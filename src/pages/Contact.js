import React from "react";

export default function Contact() {

    const handleFormSubmit = (event) => {

        event.preventDefault();


        

    }

    return (
        <div className="bg-secondary mt-32 mx-auto rounded-lg w-full md:w-4/6 lg:w-2/6">
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
                    <textarea name="userMessage" rows={8} className="block rounded-lg bg-quaternary w-full mt-1 px-2 py-1" required={true} />
                </label>
                <button type="submit" className="bg-quaternary px-4 py-1 rounded-2xl w-full font-semibold">Submit</button>
            </form>
        </div>
    )
};