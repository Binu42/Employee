const moment = require('moment');

// helper functions to truncate description to 120 characters and format date using moment package
module.exports = {
    truncate: function (str){
        return str.substring(0, 120);
    },

    formatDate: function (date, format) {
        return moment(date).format(format);
    }
}