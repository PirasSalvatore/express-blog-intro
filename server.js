const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))

app.listen(port, () => {
    console.log("il server è partito")
})

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    const posts = [
        {
            id: 1,
            title: "Il ciambellone",
            body: "questo ciambello è al gusto di limone",
            image: "/images/ciambellone.jpeg",
            tags: ["dolce", "limone", "ciambellone"]
        },
        {
            id: 2,
            title: "I cracker alla barbabietola",
            body: "spuntino veloce e dietetico",
            image: "/images/cracker_barbabietola.jpeg",
            tags: ["salato", "barbabietola", "cracker"]
        },
        {
            id: 3,
            title: "Pane Fritto",
            body: "Pane fritto e ricoperto di goloso zucchero",
            image: "/images/pane_fritto_dolce.jpeg",
            tags: ["dolce", "fritto", "pane"]
        },
        {
            id: 4,
            title: "Pasta alla barbabietola",
            body: "un primo totalmente vegetaraino e gustoso",
            image: "/images/pasta_barbabietola.jpeg",
            tags: ["primo", "barbabietola", "pasta"]
        },
        {
            id: 5,
            title: "Torta Paesana",
            body: "gustosa torna fatta con la ricetta di mia nonna",
            image: "/images/torta_paesana.jpeg",
            tags: ["dolce", "torna", "ingresiente segreto"]
        }
    ]

    const data = {
        success: true,
        name: "bacheca del viola Booleano",
        data: posts
    }

    res.json(data)
})