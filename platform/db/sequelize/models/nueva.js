module.exports = function(sequelize, DataTypes) {
    var Nueva = sequelize.define('Nueva', {
        name: DataTypes.STRING
    });

    return Nueva;
}