'use strict'
var bcrypt = require('bcrypt-nodejs');
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

	if(params.nombre &&  params.password && params.apellido && params.email){

		var nombre = params.nombre;
		var apellido = params.apellido;
		var password = params.password;
		var email = params.email;

		 let sql = "INSERT INTO vendedores (`nombre`, `apellido`, `password`, `email`) VALUES ('" + nombre + "', '" + apellido + "', '" + password + "', '" + email + "')";
		 console.log(sql);
		 let query = db.query(sql , (err, result) => {
		     if(err) return res.status(500).send({message: 'Han ocurrido un error al ingresar los datos'});
			 console.log(result);
			 return res.status(200).send({result});
		 });
	}else{
		return res.status(404).send({
			message: 'Te falta llenar los campos'
		});
	}
}


module.exports = {
	pruebas,
	saveUser
}