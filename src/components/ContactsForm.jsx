import React from 'react'
import { useForm } from 'react-hook-form'

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const errorRender = (text) => {
    return <p className="text-red-500 font-bold">{text}</p>
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input
        {...register('firstName', {
          required: "Обов'язкове поле",
          maxLength: {
            value: 20,
            message: 'Макс. довжина - 20',
          },
        })}
        className="w-full py-3 px-2 rounded-xl bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Ваше ім'я"
        autoComplete="off"
      />
      {errorRender(errors.firstName?.message)}
      <input
        {...register('emailName', {
          required: "Обов'язкове поле",
          pattern: {
            value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            message: 'Некоректний формат електронної скриньки',
          },
        })}
        className="w-full py-3 px-2 rounded-xl bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Електронна скринька"
        autoComplete="off"
      />
      {errorRender(errors.emailName?.message)}
      <input
        {...register('phone', {
          required: "Обов'язкове поле",
          maxLength: {
            value: 25,
            message: 'Макс. довжина - 25',
          },
        })}
        className="w-full py-3 px-2 rounded-xl bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Номер телефону"
        autoComplete="off"
      />
      {errorRender(errors.phone?.message)}
      <textarea
        {...register('messageField', { required: "Обов'язкове поле" })}
        className="w-full py-3 px-2 rounded-xl h-40 resize-none bg-white border border-gray-300 text-black focus:outline-none"
        placeholder="Повідомлення"
      ></textarea>
      {errorRender(errors.messageField?.message)}
      <input
        type="submit"
        className="px-5 py-3 rounded-md bg-gray-500 border border-gray-500 text-white font-bold text-base cursor-pointer  hover:bg-slate-300 duration-200 hover:text-gray-600 sm:text-lg"
      />
    </form>
  )
}

export default ContactsForm
