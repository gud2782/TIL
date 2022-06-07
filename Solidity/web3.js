<script>
//메타마스크 로그인 계정 
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];

//엔드포인트 노드를 이용해 web3js 사용
var ENDPOINT = 'https://eth-rinkeby.alchemyapi.io/v2/76coL4_w5hAyVCBbTT0dx0dE49ODK33c';
web3 = AlchemyWeb3.createAlchemyWeb3(ENDPOINT);


//ABI파일과 호출하고자 하는 컨트랙트주소를 넣어줌
contract = new web3.eth.Contract(ABI,CA);

//수정,삭제,추가가 아닌 조회는 가스비를 지불하지 않고 사용 가능
//아래는 스마트 컨트랙트의 otherTokenPrice라는 함수를 사용하는 예시(3개의 파라미터를 순서대로 넣어줘야 함)
var priceCheck = await otherContract.methods.otherTokenPrice(uiData.owner_of, uiData.token_address, uiData.token_id).call();

//승인 여부 조회
var approve = await otherWeb3.methods.isApprovedForAll(account,OtherCA ).call(); 





</script>