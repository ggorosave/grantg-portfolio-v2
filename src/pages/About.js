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
                <p className="bg-secondary text-quaternary text-lg mt-0 px-5 py-3 rounded-b-lg rounded-tr-lg md:text-xl">Hi! My name is Grant and I am a Web Developer with an extensive background in education and creative writing. I spent most of the last decade and a half traveling while teaching and mentoring young adults and children in different parts of the world. Though I decided to transition away from teaching as a career, I still believe in the power and importance of education and want to make applications to help learners of all ages grow. I consider myself to be a continual learner and believe it is important not to cut myself from any opportunities. So in that regard, I would love to exercise my coding skills for any organization. If you have any questions or want to get in touch, contact me via one of the methods below.</p>
            </div>
        </div>
    )
}