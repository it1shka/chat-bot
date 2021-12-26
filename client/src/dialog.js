const api_url = 'http://localhost:8080/'

let history = ''
export default async function getAnswer(message) {
  try {
    
    history += `Я: ${message}\nТы:`
    const params = new URLSearchParams({ 
      context: history 
    }).toString()
    const request_url = `${api_url}?${params}`
    const answer = await fetch(request_url)
      .then(res => res.text())
    history += answer
    // console.log(history)
    return answer
  } catch(error) {
    console.log(error)
  }
}