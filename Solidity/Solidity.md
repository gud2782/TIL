# 솔리디티란?
------------------------------------------------------------------------

스마트 컨트랙트를 개발하기 위한 언어
## 스마트컨트랙트란 
------------------------------------------------------------------------

미리 정의된 조건이 충족되면 블록체인에 저장된 프로그램이 작동하는것을 말함

 
솔리디티의 데이터 타입은 세가지로 나뉘며,(data type,reference type,mapping type) 
data type은 boolean,bytes,address,uint이 있다.

=======================================================================
 
boolean= true / false

ex) bool public b = false;

논리연산자도 적용됨


<img width="80%" src="https://user-images.githubusercontent.com/85503583/147574899-177b2fca-b7b4-4b73-ab1d-3f01c9fae4c1.png"/>



bytes = 1~32

ex) bytes4 pubic bt = 0x12345678;

bytes public bt2 = "STRING";

 

스마트 컨트랙트마다 address가 있음

address=

address public addr = 0x2d48d9d0392138das;

 
int vs uint 범위를 더 크게 쓸 수 있어서 uint를 많이 사용함 

ex) int8 public it = 4;

uint256 public uit = 132213;


data type은 boolean,bytes,address,uint

reference type은 string,Arrays, struct