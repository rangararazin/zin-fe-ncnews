import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const UserProfile =()=>{
    const {currentUser} = useContext(UserContext)

    return (
        <>
        <p>{currentUser.username}</p>

        </>
    )
}