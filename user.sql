-- db name: 404blog

create table user_info (
    idx varchar(255) auto_increment,
    id varchar(255) not null,
    name varchar(255) not null,
    pw varchar(255) not null,
    tel varchar(255) not null,
    primary key(idx, id)
)


