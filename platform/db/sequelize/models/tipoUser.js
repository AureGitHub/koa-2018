module.exports = function(sequelize, DataTypes) {
    var TipoUser = sequelize.define('TipoUser', {
        descripcion: DataTypes.STRING        
    }, {
        associate: function(models) {
            TipoUser.hasMany(models.User);
        }
    });

    return TipoUser;
}