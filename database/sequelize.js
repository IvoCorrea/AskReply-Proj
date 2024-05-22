const Sequelize = require('sequelize')

const connetion = new Sequelize('askandreply', 'root', '5272', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connetion