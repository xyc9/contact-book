import React, {Component} from "react";

import "./NewContactForm.css"

class NewContactForm extends Component {

    render() {
        return (
            <>
            <form className={`newContactForm ${this.props.hideForm ? "activeForm" : ""}`} >
                <span>Name :</span>
                <input type="text" name="nameValue" required value={this.props.inputValue.nameValue}
                       onChange={(e) => this.props.handleChange(e)}/>
                <span>Surname :</span>
                <input type="text" name="surnameValue" required value={this.props.inputValue.surnameValue}
                       onChange={(e) => this.props.handleChange(e)}/>
                <span>Number :</span>
                <input type="number" name="numberValue" required value={this.props.inputValue.numberValue}
                       onChange={(e) => this.props.handleChange(e)}/>
                <button type="submit" onClick={(e) => this.props.handleSubmit(e)}>Submit</button>
                <button onClick={(e) => this.props.handleForm(e)}>Close Form</button>


            </form>
            <div className={`bg ${this.props.hideForm ? "activeBg" : ""}`}></div>
            </>
        )
    }
}

export default NewContactForm