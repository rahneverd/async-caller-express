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
  let totalCount = 50
  for (let i = 0; i < totalCount; i++) {
    let res = await doRequest()
    console.log(res, i)
  }
  res.send(`Done calling ${totalCount} times`)
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})