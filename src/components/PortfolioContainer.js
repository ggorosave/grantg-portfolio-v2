import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import pages and other components below
import About from "./pages/About";
import ProjectContainer from "./pages/ProjectContainer";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function PortfolioContainer () {
    // TODO: write useState for current page here
    const [currentPage, setCurrentPage] = useState('About');

    // TODO: write logic to  render page here
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Projects') {
            return <ProjectContainer />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === "Contact") {
            return <Contact />
        }
    }

    // TODO: write handler that changes page state
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        // flex styling here is meant to keep the footer at the bottom of the page
        <div className="container flex flex-col flex-grow justify-between min-h-screen bg-primary">
            {/* Components/Pages that go inside of portfolio container go here */}

            {/* Header */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />

            {/* Pages */}
            {renderPage()}

            {/* Footer */}
            <Footer /> 
        </div>
    )

}