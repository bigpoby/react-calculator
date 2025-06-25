import { useEffect, useState } from "react";
import useUserState from "./useUserState";

function UserListItem(props) {
    const isOnline = useUserState(props.user.id);

    return (
        <li style={{ color: isOnline? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )
}

export default UserListItem;