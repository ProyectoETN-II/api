'use strict'
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var path = require('path');
var moment = require('moment');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'proyectoii'
});

function pruebas(req, res){
	res.status(200).send({
		message: 'Acción de pruebas en el servidor de NodeJS'
	});
}


//Registro
function saveUser(req, res){
	var params = req.body;

	if(params.name &&  params.password && params.surname && params.email){

		var name = params.name;
		var surname = params.surname;
		var password = params.password;
		var email = params.email;

		 let sql = "INSERT INTO user (`nombre`, `apellido`, `password`, `email`) VALUES ('" + name + "', '" + surname + "', '" + password + "', '" + email + "')";
		 let query = db.query(sql , (err, result) => {
		     if(err) throw err;
		     console.log(result);
		     res.send(result);
		 });
	}else{
		res.status(404).send({
			message: 'Te falta llenar los campos'
		});
	}
}


module.exports = {
	pruebas,
	saveUser
}