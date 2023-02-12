import React from "react";

export default function About() {

    return (
        <div className="mt-32 mx-3">

            {/* Portfolio Picture */}
            <figure>
                <img
                    src="/images/Profile_Pic_1.jpg"
                    alt="profile"
                    className="w-80 border-4 border-quaternary mx-auto my-2"
                />
            </figure>

            {/* About Me */}
            <div className="my-3">
                <h2 className="bg-secondary text-quaternary text-xl px-5 py-2 w-24 mb-0 rounded-t-lg md:text-2xl md:text-center md:w-32">About</h2>
                <p className="bg-secondary text-quaternary text-lg mt-0 px-5 py-3 rounded-b-lg rounded-tr-lg md:text-xl">I’m an ex-teacher, newbie web developer interested in being a full stack MERN developer for educational organizations and institutions. I have some interest in building browser games that teachers can customize for their classrooms and enhance student engagement. If you have any questions or want to get in touch, contact me via one of the methods below.</p>
            </div>
        </div>
    )
}