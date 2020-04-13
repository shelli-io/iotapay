const paymentModule = require('iota-payment')
const app = require('express')()

app.get("/", (req, res) => {
    res.send('hello world shelli.io iotapay!');
});

// GET /balance
app.get('/balance', (req, res) => {
    paymentModule.getBalance().then(balance => {
        res.send(balance)
    })
    .catch(err => {
        console.log(err)
    })
})

let options = {
    api: true,
    websockets: true
}

let server = paymentModule.createServer(app, options)

// Start server with iota-payment dashboard on '/iotapay' and api on '/iotapay/api'
server.listen(5000, () => {
    console.log(`Server started on http://localhost:5000 `)
    console.info(`Please visit http://localhost:5000/iotapay in your browser`)
})