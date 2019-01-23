const express = require('express')
const bodyParser = require('body-parser')
const mC = require('./controllers/messages_controller.js')



const app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", mC.create);
app.get("/api/messages", mC.read);
app.put("/api/messages/:id", mC.update);
app.delete("/api/messages/:id", mC.delete)

const port = 3001;
app.listen(3001, () => console.log(`Server listening on Port: ${port}`));