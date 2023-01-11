const db = require("./db")

async function initDB() {
    await db.sequelize.sync({force: true})

    await db.model.Product.create({
        nom: "table cuisine",
        dimensions: "40x30x10",
        prix: "1000€",
        type: "table",
        photo:"tablecuisine.jpg",
    })

    await db.model.Product.create({
        nom: "table basse en acier",
        dimensions: "40x20x10",
        prix: "500€",
        type: "table",
        photo: "tablebasseenacier.jpg"
    })

    await db.model.Product.create({
        nom: "tabouret en métal",
        dimensions: "40x10x10",
        prix: "100€",
        type: "chaise",
        photo: "tabouretenmetal.jpg",
    })

    await db.model.Product.create({
        nom: "luminaire rouge",
        dimensions: "70x30",
        prix: "200€",
        type: "divers",
        photo: "luminairerouge.jpg",
    })
    await db.model.Product.create({
        nom: "chaise en bois",
        dimensions: "40x40",
        prix: "400€",
        type: "chaise",
        photo: "chaiseenbois.jpeg",
    })
}

initDB()
    .then(() => {
        console.log("base initialisée")
    })