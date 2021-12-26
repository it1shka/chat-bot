import { useState, useRef, useEffect } from 'react'
import { Container, StyledList, Title, Message } from './styled'
import MessageInput from './MessageInput'
import getAnswer from './dialog'

export default function App() {
  const [messages, setMessages] = useState([])
  const bottomMock = useRef(null)

  useEffect(() => {
    bottomMock
      .current
      .scrollIntoView({behavior: 'smooth'})
  })

  const sendMessage = message => {
    setMessages(prevMessages => {
      return [...prevMessages, { 
        text: message, 
        mine: true }]
    })

    // here you should handle chat bot logic...
    getAnswer(message).then(answer => {
      setMessages(prevMessages => {
        return [...prevMessages, {
          text: answer || 'Нет ответа от бота...',
          mine: false
        }]
      })
    })
  }

  return (
    <Container>
      <Title>Чат-бот</Title>
      <StyledList>
        {messages.map( ({text, mine}, i) => {
          return (
            <Message mine={mine} key={i}>{text}</Message>
          )
        })}
        <div style={{float:'left',clear:'both'}}
          ref={bottomMock}></div>
      </StyledList>
      <MessageInput sendMessage={sendMessage}/>
    </Container>
  )
}
