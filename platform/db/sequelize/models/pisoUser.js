module.exports = function(sequelize, DataTypes) {
    var PisoUser = sequelize.define('PisoUser', {
       
    }, {
        associate: function(models) {
            PisoUser.belongsTo(models.User);
            PisoUser.belongsTo(models.Piso);

        }
    });

    return PisoUser;
}