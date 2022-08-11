# 웹 프로그래밍 3학년 여름방학 프로젝트 과제
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