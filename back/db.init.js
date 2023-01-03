const db = require("./db")

async function initDB() {
    await db.sequelize.sync({force: true})

    await db.model.Product.create({
        id_product: 1,
        nom: "table",
        dimensions: "40x30x10",
        prix: 1000,
        type: "table",
    })

    await db.model.Product.create({
        id_product: 2,
        nom: "table basse",
        dimensions: "40x20x10",
        prix: 500,
        type: "table",
    })

    await db.model.Product.create({
        id_product: 3,
        nom: "tabouret",
        dimensions: "40x10x10",
        prix: 100,
        type: "chaise",
    })

    await db.model.Product.create({
        id_product: 4,
        nom: "cadre",
        dimensions: "40x30",
        prix: 200,
        type: "divers",
    })
}

initDB()
    .then(() => {
        console.log("base initialisée")
    })