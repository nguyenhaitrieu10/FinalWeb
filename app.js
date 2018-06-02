var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var models = require('./models');
var paginateHelper = require('express-handlebars-paginate');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var hbs = exphbs.create({
	defaultLayout: 'layout',
	extname: 'hbs',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials',
	helpers: {
		paginate: paginateHelper.createPagination
	}
});

// app.set('views', path.join(__dirname, 'views'));
app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('port',(process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Router
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

var adminRouter = require('./routes/admin');
app.use('/root', adminRouter);

app.get('/*', function(req, res){
	res.render('error',{layout: false});
});

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});

module.exports = app;