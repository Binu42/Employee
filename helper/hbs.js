const moment = require('moment');

module.exports = {
    truncate: function (str){
        return str.substring(0, 120);
    },

    formatDate: function (date, format) {
        return moment(date).format(format);
    }
}