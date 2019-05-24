drop table if exists filters;
drop table if exists users;
drop table if exists items;

create table users (
    user_id serial primary key
    , name text not null
);

insert into users (name) values ('Josh Borup');


create table filters(
    filter_id serial primary key
    , filter text not null
    , user_id integer references users(user_id)
    , category text
);

create table items (
    item_id serial primary key
    , name text NOT NULL
    , price text NOT NULL
    , url text UNIQUE
    , date date 
    , time text
    , location text NOT NULL
    , image text NOT NULL
    , category text
);



insert into filters (filter, user_id, category) values ('ipad', 1, 'cell-phone'),('nintendo', 1, 'video-games'), ('dell', 1, 'computers'), ('galaxy', 1, 'cell-phone');