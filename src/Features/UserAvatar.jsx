import React, { useContext } from 'react'
import { UserContext } from '../App';

export default function UserAvatar() {
    const user = useContext(UserContext);
    return (
        <div>{user.name}</div>
    )
}
