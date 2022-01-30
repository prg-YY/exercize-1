import React, { useState } from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModule from "../UI/ErrorModule"
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const [error, setError] = useState()

  const submitHandler = (e) => {
    e.preventDefault()
    if (enterUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (none-empty values)!",
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0 )!",
      })

      return
    }
    props.onAddUser(enterUsername, enteredAge)
    setEnterUsername("")
    setEnteredAge("")
  }

  const usernameChangeHandler = (e) => {
    setEnterUsername(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            value={enterUsername}
            id="userName"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={enteredAge}
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
