import { InputForm } from './styled'
import { useState } from 'react'

export default function MessageInput({sendMessage}) {
  const [message, setMessage] = useState('')

  const handleFormSubmit = event => {
    event.preventDefault()
    sendMessage(message)
    setMessage('')
  }

  return (
    <InputForm onSubmit={handleFormSubmit}>
      <input required
        placeholder='Send a message...' 
        type='text'
        value={message}
        onChange={e => setMessage(e.target.value)}/>
      <button>➤</button>
    </InputForm>
  )
}