const express = require('express')
const request = require('request')
const url = 'https://google.com'

const app = express()

function doRequest() {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) {
        reject('not done ')
      } else {
        resolve('done ')
      }
    })
  })
}
app.get('/', async (req, res) => {
  let i
  for (i = 0; i < 50; i++) {
    let res = await doRequest()
    console.log(res, i)
  }
  res.send(`Done calling ${i} times`)
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})