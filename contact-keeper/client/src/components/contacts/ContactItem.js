import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrent, clearCurrent  } = contactContext

    const { id, name, email, phone, type } = contact

    const onDelete = () => {
        deleteContact(id)
        clearCurrent()
    }

    return (
        <div className="card bg-light">
            <div className="card-body">
                <h5 className="card-title text-left">
                    { name }{ ' ' }<span className={'badge ' + (type==='professional' ? 'badge-success': 'badge-primary')} >
                        {type.charAt(0).toUpperCase()+ type.slice(1)}
                    </span>
                </h5>
                <ul className="card-text">
                {email && (
                    <li><i className="fas fa-envelope-open"></i>{ email }</li>
                )}
                {phone && (
                    <li><i className="fas fa-phone"></i>{ phone }</li>
                )}
                </ul>
                <p className="mt-2">
                    <button 
                        type="button" 
                        className="btn btn-dark mr-2"
                        onClick={() => setCurrent(contact) }
                    >Edit</button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={onDelete}
                    >Delete</button>
                </p>
            </div>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}
export default ContactItem
