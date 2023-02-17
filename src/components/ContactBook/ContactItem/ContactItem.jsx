import React, {Component} from "react";

import "./ContactItem.css"


class ContactItem extends Component {
    render() {
        return (
            <div className="contact__item">
                <span>Name : {this.props.name}</span>
                <span>Surname : {this.props.surname}</span>
                <span>Number : {this.props.number}</span>
                <button onClick={()=>this.props.handleDelete(this.props.id)}>Delete</button>
            </div>

        )
    }
}

export default ContactItem