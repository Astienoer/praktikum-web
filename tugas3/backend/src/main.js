import express from 'express'

const app = express();

app.use(express.json());

const port = 7000;

app.get("/", (req, res) => {
    res.send({nama: "Astie Noer Hadiyanti"})
});

app.get("/makanan", (req, res) =>{
    res.send([
        {
            id: 1,
            nama: "Mie Indomie",
            rasa: "Empal Gentong",
        },
        {
            id: 2,
            nama: "Nasi Goreng",
            rasa: "Nasi Goreng Seafood",
        },
        {
            id: 3,
            nama: "Kwetiaw Tumis",
            rasa: "Baso sosis",
        },
    ]);
});

app.get("/minuman", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Nutrisari",
            rasa: "Jeruk Nipis",
        },
        {
            id: 2,
            nama:"Pop ice",
            rasa: "Taro",
        },
        {
            id: 3,
            nama: "Good day",
            rasa: "Freeze",
        },
    ]);
});

app.post("/create", (req, res) => {
    const request = req.body
    res.send({nama: req.body});

});

app.listen(port, () =>{
    console.log(`Aplikasinya jalan di port ${port}`)
});