let messages = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        console.log(req)
        let { text, time } = req.body;
        messages.push({ id, text, time});
        id++;
        res.status(200).json(messages)
    },
    read: (req, res) => {
        console.log(req)
        res.status(200).json(messages)
    },
    update: (req, res) => {
        let updateID  = req.params.id;
        let { text } = req.body;
        let messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).json(messages)
    },
    delete: (req, res) => {
        let deleteID = req.params.id;
        let messageIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(messageIndex, 1);
        res.status(200).json(messages)
    }
}