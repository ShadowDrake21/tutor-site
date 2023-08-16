import React from 'react'
import emailjs from '@emailjs/browser'

const ContactsForm = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dvtpcvr',
        'template_z2pl0mb',
        e.target,
        '4xETli7MS9RTP4HuR'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    setTimeout(() => e.target.reset(), 500)
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-y-2">
      <input
        className="w-full py-3 px-2 rounded-xl bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Ваше ім'я"
        autoComplete="off"
        name="firstName"
      />

      <input
        className="w-full py-3 px-2 rounded-xl bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Електронна скринька"
        autoComplete="off"
        name="emailName"
      />

      <input
        className="w-full py-3 px-2 rounded-xl bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Номер телефону"
        autoComplete="off"
        name="phone"
      />

      <textarea
        className="w-full py-3 px-2 rounded-xl h-40 resize-none bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Повідомлення"
        name="message"
      ></textarea>
      <input
        type="submit"
        className="px-5 py-3 rounded-md bg-gray-500 border border-gray-500 text-white font-bold text-base cursor-pointer  hover:bg-slate-300 duration-200 hover:text-gray-600 sm:text-lg"
      />
    </form>
  )
}

export default ContactsForm
