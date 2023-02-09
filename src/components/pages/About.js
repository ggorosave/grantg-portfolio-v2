import React from "react";

export default function About() {

    return (
        <div className="mt-32 mx-3">
            <figure>
                <img
                    src="/images/Profile_Pic_1.jpg"
                    alt="profile"
                    className="w-80 border-4 border-quaternary mx-auto"
                />
            </figure>
            <div className="my-3">
                <h2>About</h2>
                <p>I’m an ex-teacher, newbie web developer interested in designing and working on websites for educational organizations and institutions. I like working with HTML and CSS, and I’m currently in the process of learning JavaScript. I have some interest in building browser games that teachers can customize for their classrooms and enhance student engagement. If you have any questions or want to get in touch, contact me via one of the methods below.</p>
            </div>
        </div>
    )
}