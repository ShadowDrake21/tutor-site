import React from 'react'
import ContactsForm from './ContactsForm'
import ContactsMedia from './ContactsMedia'
import Title from './Title'

const Contacts = () => {
  return (
    <div className="py-10 px-2 md:py-16">
      <Title text="Контакти" />
      <div className="max-w-screen-lg flex justify-between bg-zinc-50 border border-gray-100 mx-auto px-5 py-7">
        <div>
          <h4 className="text-center text-lg uppercase mb-4 md:mb-6 md:text-xl lg:mb-8">
            Де можна мене знайти?
          </h4>
          <ContactsMedia />
        </div>
        <div className="max-w-lg w-full">
          <h4 className="text-center text-lg uppercase mb-4 md:mb-6 md:text-xl lg:mb-8">
            Напишіть до мене
          </h4>
          <ContactsForm />
        </div>
      </div>
    </div>
  )
}

export default Contacts
