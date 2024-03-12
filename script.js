async function getApi(){
	const jsonData=await fetch("https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3");
	const finalData= await jsonData.json();
	postApi(finalData);

}
getApi();
function postApi(data){
	let val=document.createElement("div");
	val.innerHTML=`<h4>${data}</h4>`
}



//for password reset
password.addEventListener("click" function(){
	if(password.type==text){
		password.setAttribute('', password.type);
	}
})

