module.exports = function(sequelize, DataTypes) {
    var TipoGasto = sequelize.define('TipoGasto', {
        descripcion: DataTypes.STRING        
    }
    );

    return TipoGasto;
}