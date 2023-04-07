import React, { useState } from "react";
import { CircumIcons } from "react-icons";

function SearchBar({ setId }) {

    const [val, setVal] = useState("");


    return (
        <div>

            <form className="flexbox : center">
                <input type="text"
                    placeholder="Enter id"
                    className="rounded"
                    value={val}
                    onClick={(e) => {

                        setVal(e.target.value);
                    }}
                />

                <button
                    type="submit"
                    onClick={(e) => {

                        e.preventDefault();
                        setId(val);
                        setVal("");
                    }}
                >

                </button>
            </form>
        </div>
    );
}


export default SearchBar;

