const db = require("./db")

async function initDB() {
    await db.sequelize.sync({force: true})

    await db.model.Product.create({
        nom: "table cuisine",
        dimensions: "40x30x10",
        prix: "1000€",
        type: "table",
    })

    await db.model.Product.create({
        nom: "table basse en acier",
        dimensions: "40x20x10",
        prix: "500€",
        type: "table",
    })

    await db.model.Product.create({
        nom: "tabouret en bois",
        dimensions: "40x10x10",
        prix: "100€",
        type: "chaise",
    })

    await db.model.Product.create({
        nom: "cadre rouge",
        dimensions: "40x30",
        prix: "200€",
        type: "divers",
    })
    await db.model.Product.create({
        nom: "chaise roulante",
        dimensions: "40x40",
        prix: "400€",
        type: "chaise",
    })
}

initDB()
    .then(() => {
        console.log("base initialisée")
    })