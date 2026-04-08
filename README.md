
## 웹 서버 만들기
- Lagnage: Javascript
- 개발환경: node.js
- 서버 설치 명령어: npm init -y : package.json 생성 된다

### Express 프레임워크 설치
- 설치: npm install express
- import 사용 : ES6 문법
  package.json에서 "type": "module", 로 변경 해준다
- 서버 자동 실행: nodemon 설치
    npm i nodemon<br/>
    package.json에 설정<br/>
    "start": "nodemon index.js"<br/>
    실행 명령어: npx nodemon index.js<br/>

## DB 연결
### mysql2 라이브러리 설치
- npm install mysql2

### MySQL DBMS 연결 설정
{
    host: 'localhost',
    user: 'jsuser',
    password: 'js1234',
    database: 'jsdb'
}

### rest api
- 상품 조회: app.get()
- 상품 등록: app.post()
- 상품 수정: app.put()
- 상품 삭제: app.delete()