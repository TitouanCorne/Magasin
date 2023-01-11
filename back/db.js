const { Sequelize, DataTypes } = require('sequelize');
path = require('path')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite')
});

const Product = sequelize.define('Product', {
    nom: {
        type: DataTypes.STRING,
        primaryKey : true,
        allowNull: false
    },
    dimensions:{
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo:{
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    // Other model options go here
});

module.exports = {
    sequelize: sequelize,
    model: {
        Product: Product,
    }
}