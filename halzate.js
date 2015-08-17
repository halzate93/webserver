var contact = require('./contact.js');

exports.route = function(routes){
    routes.post['/halzate/contact'] = contact.sendMail;
};
