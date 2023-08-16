import React from 'react'

const ContactsMedia = ({ icon, link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={icon}
          alt="icon"
          className="w-10 h-10 object-cover rounded-lg border border-gray-400 sm:w-14 sm:h-14"
        />
      </a>
    </div>
  )
}

export default ContactsMedia
