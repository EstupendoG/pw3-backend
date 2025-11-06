create DATABASE pw_atv3;

create table continent (
	ctn_id serial primary key,
	ctn_nome varchar(20) not null,
	ctn_descricao text
);
select * from continent;

create table country (
	ctr_id serial primary key,
	ctr_nome varchar(40) not null,
	ctr_populacao int not null,
	ctr_idioma varchar(50) not null,
	ctr_moeda varchar(50),
	ctn_id int not null,
	foreign key (ctn_id) references continent (ctn_id) on delete cascade
);

create table city (
	cty_id serial primary key,
	cty_nome varchar(60) not null,
	cty_populacao int not null,
	cty_latitude int,
	cty_longitude int,
	ctr_id int not null,
	foreign key (ctr_id) references country (ctr_id) on delete cascade
);