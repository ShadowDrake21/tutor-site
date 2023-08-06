import React from 'react'

const ContactsMedia = ({ icon, link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={icon}
          alt="icon"
          className="w-14 h-14 object-cover rounded-lg border border-gray-400"
        />
      </a>
    </div>
  )
}

export default ContactsMedia
