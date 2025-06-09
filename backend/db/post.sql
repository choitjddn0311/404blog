create table posts (
    idx int auto_increment primary key,
    title varchar(255) not null,
    content varchar(10000) not null,
    created_at datetime not null default current_timestamp
);

insert into posts (title, content) values ('테스트 글 제목', '테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.')