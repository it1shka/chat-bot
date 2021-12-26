import styled, { createGlobalStyle, css } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  #root {
    --primary: #3952c4;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`

const OuterContainer = styled.div`
  flex: 0 0 100%;
  max-width: 460px;
  max-height: 560px;
  height: 100%;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow: hidden;
`

const InnterContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const Container = (props) => {
  return (
    <OuterContainer>
      <InnterContainer {...props}/>
    </OuterContainer>
  )
}

export const Title = styled.h1`
  padding: 0.5em 1em;
  color: white;
  background-color: var(--primary);
`

export const StyledList = styled.ul`
  padding: 0.4em 0.5em;
  padding-bottom: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  scrollbar-width: none;
  list-style-type: none;
  & > * + * {
    margin-top: 0.3em;
  }
`

export const InputForm = styled.form`
  color: #545454;
  display: flex;
  padding: 0.5em;
  border-top: 1px solid #e8e8e8;
  & > input {
    flex: 1;
    color: inherit;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    font-size: 1em;
  }

  & > button {
    border: transparent;
    border-radius: 100%;
    padding: 0.75em;
  }
`

export const Message = styled.li`
  padding: 0.25em 0.5em;
  max-width: 250px;
  border-radius: 0.5em;
  background-color: #dddddd;
  word-wrap: break-word;

  ${({mine}) => mine && css`
  align-self: flex-end;
  background-color: #7d7d7d;
  color: white;
  `}
`
