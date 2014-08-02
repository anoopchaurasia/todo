fm.Package("app");
fm.Include("web");
fm.Class("Todo", "Base");
app.Todo = function (base, me, Base){this.setMe=function(_me){me=_me;};
	Static.main=function(){
		web = webPath;
		Starter.handle(require('http').createServer().listen(8081, "localhost"));
		console.log("Server is running on port 8081");
	}
	this.method = function( req, res ) {
		var path =  web.sources + "/index.html";
		require('fs').readFile(path, function( err, data ) {
			console.log("sdsdsd dfdfdf");
			if (err) {
				res.writeHead(400, {'Content-Type': 'text/html'});
				console.log(err);
			}
			else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				res.end();
			}
		});
	};	
};