import React from "react";
import friends from "../friends.json";
// import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";

class List extends React.Component {

    state = {
        friends: friends,
        sort: "ASC"
    }

    handleSearch = event => {
        // const {name, value} = event.target
        let searchValue = (event.target.value).toLowerCase();
        console.log(searchValue);
        let filteredList = friends.filter(friend => {
            console.log(friend.name)
            // return is automatic without curly brackets
            return (friend.name).toLowerCase().includes(searchValue)
        }
        );
        this.setState({
            friends: filteredList
        });  
    }
    handleSort = () => {
        if (this.state.sort === "ASC") {
            let friends = this.state.friends.sort((a,b) => 
            a.name > b.name ? 1 : -1
            )
            this.setState({
                friends: friends,
                sort: "DEC"
            })
        } else {
            let friends = this.state.friends.sort((a,b) => 
            a.name < b.name ? 1 : -1
            )
            this.setState({
                friends: friends,
                sort: "ASC"
            })
        }

    }

    render() {
        console.log(this.state.friends);
        return (
                <div>
                    {/* <Header /> */}
                    <Search handleSearch={this.handleSearch} />
                    <br></br>
                    <Table friends={this.state.friends} handleSort={this.handleSort} />
                    <br></br>
                </div>
            );
    }


}

export default List;

// first handleSearch is pulling from Search.js props.handleSearch