LEVEL 1

select church.year yearofchurch, church.name Church_name, city.name City 
from church
join city on city.id = church.city_id
order by church.year;

create table church(
church_id int primary key,
name varchar(50),
year int ,
city_id int references city(id)
);

insert into church
values
(21, 'Oscar-Fredriks church', 1893, 3),
(22, 'Masthuggs church',1914, 3),
(23, 'Sankt Georgios church', 1890, 1),
(24, 'Matteus church', 1892, 2);

create table city(
id int primary key,
name varchar(30)
);

insert into city
values
(1, 'Stockholm'),
(2, 'Norrköping'),
(3, 'Göteborg');
		
		
		
LEVEL2	
	
select person.name Name, city.name City 
from person
join city on person.livesincity = city.id
order by person.name;

select person.name Name, church.name Church_name, church.year Yearofchurch
from churches
join church on churches.church_id = church.church_id 
join person on churches.person_id = person.person_id
order by person.name, church.name;


create table person(
person_id int primary key,
name varchar(30),
livesincity int references city(id)		
);

insert into person
values
(101, 'Linnea', 3 ),
(102, 'Harry', 1);


create table churches(
person_id int references person (person_id),
church_id int references  church(church_id)
);

insert into churches
values
(101, 21),
(101, 24),
(102, 24);










