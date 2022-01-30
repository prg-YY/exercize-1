import React from "react"
import classes from "./UserList.module.css"
import Cart from "../UI/Card"

const UserList = (props) => {
  return (
    <Cart className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Cart>
  )
}

export default UserList
