CREATE DATABASE proyectoII;
USE proyectoII;

CREATE TABLE vendedores(
id              int(255) auto_increment not null,
nombre          varchar(25) not null,
apellido        varchar(25) not null,
email           varchar(255) not null,
password        varchar(255) not null,
CONSTRAINT pk_vendedores PRIMARY KEY(id),
CONSTRAINT uq_email UNIQUE(email)
)ENGINE=InnoDb;

INSERT INTO vendedores VALUES(NULL, 'Admin', 'Admin', 'admin@admin.com', 'Admin');