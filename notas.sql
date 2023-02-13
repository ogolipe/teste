create database crudnotas;
create table notas(
    id int primary key auto_increment not null,
    name varchar(45) not null,
    titulo varchar(45) not null,
    anotacao varchar(255) not null
);
