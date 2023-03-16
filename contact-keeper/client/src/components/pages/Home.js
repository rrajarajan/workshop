import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'

const Home = () => {
    return (
        <div className="row">
            <div className="col col-sm-8">
                <ContactFilter />
                <ContactForm />
            </div>
            <div className="col col-sm-4">
                <Contacts />
            </div>        
        </div>
    )
}

export default Home
