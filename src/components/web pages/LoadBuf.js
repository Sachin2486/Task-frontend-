import React from "react";
import ReactLoading from "react-loading";

export default function LoadBuf() {
    return (
        <div className="flex-box : justify center">
            <h2>Loading Data</h2>
            <ReactLoading type="balls" color="#000005" height={60} width={30} />
        </div>
    );
}

