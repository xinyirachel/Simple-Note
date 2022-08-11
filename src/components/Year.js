import React from "react";

function Year() {

    const currentYear  = new Date().getFullYear();

    return (
        <footer>
        <p>
        This is how I take notes in {currentYear}.
        </p>
        </footer>
    );
}

export default Year;