create table post (
    idx int auto_increment primary key,
    id varchar(255) not null,
    title varchar(255) not null,
    content varchar(10000) not null,
    post_text varchar(500) not null,
    created_at datetime not null default current_timestamp
);

insert into posts (title, content) values ('테스트 글 제목', '테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.테스트중입니다 감사합니다. 테스트중입니다 감사합니다.')


insert into post (id, title, content, post_text) values ('admin' , '글 제목 부분입니다.' , '글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.글 내용입니다.' , '글 내용에 대해 알아봤습니다');



insert into post (id, title, content, post_text) values ('admin' , 'db 이모티콘 테스트입니다' , '😊😊😊' , '과연');