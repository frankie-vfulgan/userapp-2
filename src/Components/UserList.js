import React from "react";
import UserItem from "./Components/UserItem";

function UserList(props) {
    return (
        <div>
            {props.allUsers.map (
                (user) => (
                <UserItem user={user} />))}z
        </div>
    );
}

export default UserList;

