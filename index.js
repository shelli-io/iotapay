const paymentModule = require('iota-payment')
const app = require('express')()
const PORT = process.env.PORT || 5000;

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
server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT} `)
    console.info(`Please visit http://localhost:${PORT}/iotapay in your browser`)
})