const express = require('express')
const app = express()

const port = parseInt(process.argv[2])

app.get('/', (req, res) => {
  res.send(`This is :${port}`)
})
app.get('/not-allowed.json', (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': 'null',
  })
  res.json({
    time: new Date().getTime(),
    port,
  })
})
app.get('/allowed-for-3000.json', (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  })
  res.json({
    time: new Date().getTime(),
    port,
  })
})
app.get('/allowed.json', (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
  })
  res.json({
    time: new Date().getTime(),
    port,
  })
})
app.get('/get-json.js', (req, res) => {
  const js = `
const main() => {
  await fetch()
}
main()
`
  res.send(js)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
