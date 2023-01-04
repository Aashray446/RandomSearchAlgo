import React from "react";
import D3Container from "../components/d3Container";

export default function Playground() {

    return (
        <div className="sm:w-2/3  h-screen">
            <D3Container nodes={20} links={20} />
        </div>
    );
}