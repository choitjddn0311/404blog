-- db 접속
-- \connect --mysql root@localhost:3306

create table user (
    idx int auto_increment,
    id varchar(255) not null,
    name varchar(255) not null,
    pw varchar(255) not null,
    primary key(idx, id)
);

-- test data
insert into user (id, name, pw) values ('choi', '관리자', '2222');