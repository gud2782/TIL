3D, 예를 들어 카지노,도박 사이트, 실시간 채팅, 실시간 영상들은 자바스크립트 이용

socket.io를 쓰면 실시간 채팅,실시간 기능을 가능하게 함 


### React Native 
------------------------------------------------------------------------
자바스크립트 만으로 안드로이드,ios앱을 만들게 해줌
ex) 디스코드,페이스북,인스타그램

 
### Electron
------------------------------------------------------------------------
데스크탑 앱을 만들 수 있음

ex) VScode,페이스북 메신저,슬랙


## 자바스크립트 변수 설정
------------------------------------------------------------------------
const : 업데이트 가능한 변수

let : 업데이트 불가능한 변수 

var : 과거에 사용한 변수 설정 const와 같음

null : 비어있음

undefined: 정의되지 않음 

array(배열): 하나의 변수(Variable) 안에 데이터의 리스트를 가지게 함



querySelector를 사용할 땐 대상을 명확히 해줘야 함
왜냐하면 querySelector은 classname,tagname 모두 검색이 가능함 

getElementById는 명확하게 id를 검색하는것으로 명시했기 때문에 그냥 사용하면 됨 


Login
JavaScript가 들어와서 제일 먼저 local storage를 확인함


### JavaScript 함수
------------------------------------------------------------------------



.padStart()

이 함수는 가지고 있는 string을 보다 길게 만들어주어야 할 때 사용함
string 문자열을 원하는 길이까지 추가시켜줄수있음

ex) "1".padStart(2,"0")
='01'

이 경우 string이 가져야 하는 길이를 2으로 설정해주고, 그렇지 않다면 앞쪽에 0을 추가시켜줌

.padEnd()

ex) "1".padEnd(3,"0")
='100'

이 경우 string이 가져야 하는 길이를 3으로 설정해주고, 그렇지 않다면 뒤쪽에 0을 추가 시켜줌



Math.random():0~1사이의 랜덤값을 줌
그래서 10을 곱하면 0에서 10 사이의 값을 랜덤으로 받을 수 있음
ex)Math.random() * 10

이때 정수뿐만이 아닌 소수점도 같이 받게 됨
ex)5.xxxxxxxxxxx

여기서 소수점을 없애기 위해 세 가지의 함수를 사용가능함
1.Math.round
ex)Math.round(1.1) = 1  ,  Math.round(1.7) = 2
2.Math.ceil()
ex)Math.ceil(1.1) = 2
3.Math.floor()
ex)Math.floor(1.8) = 1 


### 자바스크립트 Object나 array 등등을 String으로 바꾸기
const player = {name:"abc"}

JSON.stringfy(player)

값을 string으로 바꾸고 싶을때 사용함