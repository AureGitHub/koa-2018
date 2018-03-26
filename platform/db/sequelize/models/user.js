module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        email : DataTypes.STRING,
        password : DataTypes.STRING        
    }, {
        associate: function(models) {
            User.belongsTo(models.TipoUser);
            User.hasMany(models.PisoUser);
        }
    });

    return User;
}