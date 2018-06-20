var jwt = require("jwt-simple");
var minSession = 15;
var JWT_SECRET = 'sdlfshdfk sdklf dsn';

var  expiresIn = function(numMin) {
    var dateObj = new Date();
    return dateObj.setMinutes(dateObj.getMinutes() + numMin);
}

exports.minSession=minSession;
exports.OnlygenToken = function (user) {
    var expires = expiresIn(minSession); // Minutos de session


    var token = jwt.encode({
        exp: expires,
        user: user
    }, JWT_SECRET);

    return token;
}

