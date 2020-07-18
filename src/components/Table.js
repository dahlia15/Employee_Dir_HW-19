import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID </th>
                    <th>Image </th>
                    <th onClick={props.handleSort}>Name (Click To Sort)</th>
                    <th>Occupation</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.friends.map(friend => {
                    return (
                        <tr key={friend.id}>
                            <td>{friend.id}</td>
                            <td><img src={friend.image} alt="friend" style={{height: 100, width: 100}}/></td>
                            <td>{friend.name}</td>
                            <td>{friend.occupation}</td>
                            <td>{friend.location}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
};

export default Table;