import React from 'react'
import ContactsForm from './ContactsForm'
import ContactsMedia from './ContactsMedia'
import Title from './Title'

import buki from '../assets/buki.png'
import facebook from '../assets/facebook.png'
import phone from '../assets/phone.png'

const Contacts = () => {
  return (
    <div name="contacts" className="py-6 px-2 md:pt-16 md:pb-10">
      <Title text="Контакти" />
      <div className="max-w-screen-lg flex justify-between bg-zinc-50 border rounded-2xl border-gray-100 mx-auto px-3 py-5 flex-col items-center gap-y-5 sm:px-5 sm:py-8 md:flex-row md:gap-0">
        <div className="max-w-lg w-full flex items-center flex-col justify-center">
          <h4 className="text-center text-lg uppercase mb-2 md:mb-3 md:text-xl lg:mb-4">
            Де можна мене знайти?
          </h4>
          <div className="flex gap-5 flex-wrap justify-center">
            <ContactsMedia icon={facebook} link="https://www.facebook.com/" />
            <ContactsMedia icon={phone} link="tel: +380931926350" />
            <ContactsMedia icon={buki} link="https://buki.com.ua/user-4371/" />
          </div>
        </div>
        <div className="max-w-lg w-full">
          <h4 className="text-center text-lg uppercase mb-2 md:mb-3 md:text-xl lg:mb-4">
            Напишіть до мене
          </h4>
          <ContactsForm />
        </div>
      </div>
    </div>
  )
}

export default Contacts
