import React, { useState } from "react";
import Header from "./Header";
// import pages and other components below
import About from "./pages/About";

export default function PortfolioContainer () {
    // TODO: write useState for current page here
    const [currentPage, setCurrentPage] = useState('About');

    // TODO: write logic to  render page here
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
    }

    // TODO: write handler that changes page state
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="container h-full bg-primary">
            {/* Components/Pages that go inside of portfolio container go here */}
            {/* Header */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Pages */}
            {renderPage()}
            {/* Footer */}
        </div>
    )

}