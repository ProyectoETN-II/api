'use strict'
var bcrypt = require('bcrypt-nodejs');
const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123',
	database: 'proyectoII'
});

function pruebas(req, res) {
	res.status(200).send({
		message: 'Acción de pruebas en el servidor de NodeJS'
	});
}


//Registro
function signOut(req, res) {
	var params = req.body;

	var user = {
		name: params.name,
		surname: params.surname,
		password: params.password,
		email: params.email
	}

	//Comprobación de campos ingresados
	if (!user.name) return res.status(400).send("No has ingresado tú nombre");
	else if (!user.surname) return res.status(400).send("No has ingresado tú apellido");
	else if (!user.password) return res.status(400).send("No has ingresado una contraseña");
	else if (!user.email) return res.status(400).send("No has ingresado tú E-mail");

	//Encriptación de la contraseña
	bcrypt.hash(user.password, null, null, (err, hash) => {
		user.password = hash;
		if (err) return console.log(err);
	})

	//Consulta para insertar el usuario
	let sql = "INSERT INTO vendedores (`nombre`, `apellido`, `password`, `email`) VALUES ('" + user.name
		+ "', '" + user.surname + "', '" + user.password + "', '" + user.email + "')";

	//Consulta en la BD
	db.query(sql, (err, result) => {

		if (err) {
			return res.status(500).send({ message: 'Ha ocurrido un error al ingresar los datos' });
			console.log(err)
		}
		return res.status(200).send({ user });
	});

}


module.exports = {
	pruebas,
	signOut
}