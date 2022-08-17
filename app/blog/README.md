# 웹 프로그래밍 3학년 여름방학 프로젝트 과제

## 실행 방법
1. git clone https://github.com/LeastKIds/YeungJin_3_2_WebPrograming3_Sumer_vacation.git
2. cd ./app/blog
3. npm install
4. (만약 json server가 실행되지 않는 다면) npm i -g json-server
5. http://localhost:3000 접속

### 도커로 실행(저는 이 방법으로 실행했습니다.)
1. docker pull node
2. docker run -it --name 컨테이너이름 -p 3000:3000 -v 절대경로/app:/app node
3. docker start 컨테이너이름
4. docker exec -it 컨테이너이름 /bin/bash
5. cd ./app/blog
6. npm install
7. npm run start
8. docker pull clue/json-server
9. docker run -d --name 컨테이너이름 -p 3001:80 -v 절대경로/app/blog/db.json:/data/db.json clue/json-server
10. docker start 컨테이너이름
11. http://localhost:3000 접속








## CRUD 기능

## Mock Server
실제 서버처럼 요청을 받고 주는 가짜 서버

## useState
실시간 변화를 감지. 

~~~
const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
~~~

## useEffect
컴포넌트가 렌더링 될 때마다 특정 작업을 실행 할 수 있도록 하는 기능

https://xiubindev.tistory.com/100

## useLocation
라우터 설치가 필요

npm install react-router-dom

페이지 정보를 받아올 때? 사용

~~~
cosnt location = useLocation();
useEffect( () => {
    console.log(location);
}, [location]);
~~~

## react routing
우리가 아는 라우팅?