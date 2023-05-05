import React from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input />
        </div>
        <Button>Click Me</Button>
        <Button>Reset</Button>
        <ModalComponent />
      </div>
    </div>
  )
}

export default App
