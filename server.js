const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('App is running')
})
app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  console.log('here -> ', sessionId, serviceCode, phoneNumber, text)
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Welcome to the CREAM PLATFORM.
    Where your creativity dreams come true.
    Kindly enter your preferred option 1, 2 or 3
    
    1. TALENT
    2. BID OF THE WEEK
    3. BID More`
    res.send(response)
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON The service will cost you NGN 100
    
    1. Movie
    2. Fashion/Lifestyle
    3. Entrepreneur
    4. Comedy
    5. Scholarship`
    res.send(response)
  }else if (text == '1*1' || text == '1*2' || text == '1*3'  || text == '1*4'  || text == '1*5') {
    const selected = text == '1*1'? 'MOVIE' : text == '1*2'? 'FASHION/LIFESTYLE' : text == '1*3'? 'ENTREPRENEUR': text == '1*4'? 'COMEDY': 'SCHOLARSHIP';
    let response = `END To Register for ${selected} 
    Please authorize the charge of N100.00.
    You will receive a message shortly`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    let response = `CON Available Items
    
    1. TV Set (Value: N100,000)
    2. Generator (Value N200,000)
    3. Techno Spark (Value N85,000)`
    res.send(response)
  } else if (text == '2*1' || text == '2*2' || text == '2*3') {
    const selected = text == '2*1'? 'TV Set (Value: N100,000)' : text == '2*2' ? 'Generator (Value N200,000)' :  'Techno Spark (Value N85,000)';
    let response = `CON Enter your bid amount for ${selected}
    (lowest amount you want to pay)`
    res.send(response)
  } 
  else if (text == '2*1*?' || text == '2*2*?' || text == '2*3*?') {
    let response = `END This service cost N100.00 ${text}`
    res.send(response)
  }else if (text == '3') {
    // Business logic for first level response
    let response = `CON Available Items
    
    1. TV Set (Value: N100,000)
    2. Generator (Value N200,000)
    3. Techno Spark (Value N85,000)`
    res.send(response)
  } else if (text == '3*1' || text == '3*2' || text == '3*3') {
    const selected = text == '3*1'? 'TV Set (Value: N100,000)' : text == '3*2' ? 'Generator (Value N200,000)' :  'Techno Spark (Value N85,000)';
    let response = `COM Enter your bid amount for ${selected}
    (lowest amount you want to pay)`
    res.send(response)
  } else if (text == '3*1*?' || text == '3*2*?' || text == '3*3*?') {
    let response = `END This service cost N100.00 ${text}`
    res.send(response)
  } else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})