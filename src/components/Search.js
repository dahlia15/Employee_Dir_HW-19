import React from "react";

function Search(props) {
    return (
        <div>
            <br></br>
            <h2> Search Below: </h2>
            <input type="text" className="search" placeholder="Enter Employee Name" onChange={(event)=> props.handleSearch(event)} />
        </div>
    )
};

export default Search;