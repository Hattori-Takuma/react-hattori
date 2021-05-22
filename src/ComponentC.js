import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


const ComponentC = () => {
  const history = useHistory()
  const backPage = () => {
    history.push("/componentb")
  }
  return (
    <div>

      <div>
        ComponentC
    </div>

      <button onClick={backPage}>Bへ戻る</button>

    </div>
  )
}

export default ComponentC