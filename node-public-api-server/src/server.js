require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios').default

const app = express()
app.use(cors())


app.get('/', async (req, res) => {
  try {
    const context = req.query.context
    // console.log(context)
    const params = ({
      context,
      token_max_length: 128,
      temperature: 0.5,
      top_p: 1.0,
      stop_sequence: '\n'
    })
    const answer = await axios.post(
      process.env.API_URL, null, { params }
    ).then(res => {
      const result = res.data.text
      return result
    })
    // console.log(answer)
    res.send(answer)

  } catch(error) {
    console.error(error)
    res.status(500).send('Внутренняя ошибка бота!')
  }
})

const port = process.env.PORT ?? 3005
app.listen(port, () => {
  console.log(`Listening: ${port}`)
})