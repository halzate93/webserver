var parser = require('ua-parser');

exports.route = function (routes) {
    routes.get['/zombimenterio'] = function (req, res){
	var browser = parser.parse(req.headers['user-agent']).ua.family;
	
	var url = req.originalUrl;
	
	if(url.charAt(url.length - 1) != '/'){
	    url += '/';
	}
	
	//console.log(url);
	if(browser == "Chrome"){
	    res.redirect(url + 'webgl');
	}else{
	    res.redirect(url + 'webplayer');
	}
    }
    
    routes.get['/zombimenterio/webgl/Release/*'] = function (req, res, next) {
	req.url = req.url.replace('Release', 'Compressed') + 'gz';
	res.set('Content-Encoding', 'gzip');
	next();
    }
};
