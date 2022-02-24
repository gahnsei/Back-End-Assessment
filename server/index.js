const express = require("express");
const cors = require("cors");
const ctrl = require(`./controller.js`);
const app = express();
const path = require(`path`);

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../client/index.html`))
})

app.get("/api/compliment", ctrl.getCompliment);
app.get(`/api/fortune`, ctrl.getAllFortune);
app.get(`/api/fortune/random`, ctrl.getFortune);
app.post(`/api/fortune`, ctrl.addFortune);
app.put(`/api/fortune`, ctrl.addFortune);
app.delete(`/api/fortune/:user`, ctrl.deleteUser);

let port = process.env.PORT || 4000

app.listen(port, () => console.log(`Have you boys seen my Goyard port on ${port}`));
