import React, {Component} from "react";
import {v4 as uuidv4} from 'uuid';


import "./ContactBook.css"
import ContactItem from "./ContactItem/ContactItem";
import NewContactForm from "./NewContactForm/NewContactForm";

class ContactBook extends Component {
    constructor() {
        super();
        this.state = {
            Contacts: [{
                name: "1",
                surname: "Snow",
                number: "+931143334",
                id: uuidv4(),
            },
                {
                    name: "2",
                    surname: "Snow1",
                    number: "+931143334",
                    id: uuidv4(),
                }

            ],
            inputValue: {
                nameValue: "",
                surnameValue: "",
                numberValue: "",
            },
            hideForm: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
       let value = this.state.inputValue;
       value[e.target.name] = e.target.value;
        this.setState({
            inputValue : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let newContact = {
            name: this.state.inputValue.nameValue,
            surname: this.state.inputValue.surnameValue,
            number: this.state.inputValue.numberValue,
            id: uuidv4()
        }
        if(newContact.name!== "" & newContact.surname!== "" & newContact.number!== "" ){
            this.setState({
                Contacts: [...this.state.Contacts, newContact],
                inputValue: {
                    nameValue: "",
                    surnameValue: "",
                    numberValue: ""
                },
                hideForm: false,
            })
        }else {
            alert("Complete Form ")
        }
    }
    handleForm = (e) => {
        e.preventDefault();
        this.setState({
            hideForm: !this.state.hideForm,
            inputValue: {
                nameValue: "",
                surnameValue: "",
                numberValue: ""
            }
        })
    }
    handleDelete = (id) => {
        const newContactList = this.state.Contacts.filter((item) => item.id !== id);
        this.setState({Contacts: newContactList});
    }


    render() {
        return <>
            <div className="contactBook">
            {this.state.Contacts.map(item => {
                return (
                    <ContactItem key={item.id}
                                 id={item.id}
                                 number={item.number}
                                 name={item.name}
                                 surname={item.surname}
                                 handleDelete={this.handleDelete}
                    />
                )
            })}
            <button className="form__btn" onClick={(e) => this.handleForm(e)}>Add New Contact</button>
            </div>
            {
                this.state.hideForm ?
                    <NewContactForm hideForm={this.state.hideForm} inputValue={this.state.inputValue} handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit} handleForm={this.handleForm}/> : null
            }

        </>
    }
}

export default ContactBook