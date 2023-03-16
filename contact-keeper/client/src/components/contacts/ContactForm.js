
import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)

    const { addContact, updateContact, clearCurrent, current } = contactContext

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    useEffect(() => {
        if(current !== null ){
            setContact(current)
        } else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    },[contactContext, current])

    const { name, email, phone, type } = contact
    const onChange = e => setContact({...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        console.log(contact)
        if(current === null){
            addContact(contact)
        }else{
            updateContact(contact)
        }
        clearAll()
    }

    const clearAll = e => {
        clearCurrent()
    }

    return (
        <form className="bg-light" onSubmit={onSubmit}>
            <div className="form-group">
                <h2 className="text-primary">{current !== null ? "Edit Contact" : "Add Contact"} </h2>
            </div>
            <div className="form-group">
                <label for="name">Name</label>
                <input 
                    type='text'
                    placeholder='Name'
                    id='name'
                    name='name'
                    value={name}
                    onChange={onChange}
                />                
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input 
                    type='email'
                    placeholder='Email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />         
            </div>            
            <div className="form-group">
                <label for="phone">Phone</label>
                <input 
                    type='text'
                    placeholder='Phone'
                    id='phone'
                    name='phone'
                    value={phone}
                    onChange={onChange}
                />         
            </div>
            <div className="form-group">
                <h5>Contact Type</h5>
                <input 
                    type="radio"
                    name="type"
                    value="personal"
                    checked={type === 'personal'}
                    onChange={onChange}                    
                />Personal {''}
                <input 
                    type="radio"
                    name="type"
                    value="professional"
                    checked={type === 'professional'}
                    onChange={onChange}                    
                />Professional {''}            
            </div>            
            <div>
                <input 
                    type='submit' 
                    value={current !== null ? "Update Contact" : "Add Contact"} 
                    className="btn btn-primary" 
                />
                {/* //if Current add Clear button */}
                {current && 
                        <button className="btn btn-danger" onClick={clearAll}>Clear</button>
                }                    
            </div>     
        </form>
    )
}

export default ContactForm
