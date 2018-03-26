module.exports = function(sequelize, DataTypes) {
    var Piso = sequelize.define('Piso', {
        direccion : DataTypes.STRING
    }, {
        associate: function(models) {
             Piso.hasMany(models.PisoUser);
        }
    });

    return Piso;
}