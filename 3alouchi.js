let addButtons = Array.from(document.querySelectorAll("#add-button"));
let minusButtons = Array.from(document.querySelectorAll("#minus-button"));
let quantitys = Array.from(document.querySelectorAll("#quantity"));
let prices = Array.from(document.querySelectorAll("#price"));
let deletes = Array.from(document.querySelectorAll("#delete"));
let parents = Array.from(document.querySelectorAll("#parent"));
let hearts = Array.from(document.querySelectorAll("#heart"));
tab= document.getElementsByClassName("fa-heart")
for(i=0;i<tab.length;i++){
    tab[i].addEventListener("click",change)
}
function change(e){
    (e.target.style.color=="red")?e.target.style.color="#979797":e.target.style.color="red"
}
function show()
{
    if(document.getElementById("item").style.display=="block")
    document.getElementById("item").style.display="none"
    else document.getElementById("item").style.display="block"
}

let arrOfQuantitys = [];
let arrOfPrices = [];
for(let i in quantitys){
    arrOfQuantitys[i] = 1 ;
}
for(let i in prices ){
    arrOfPrices[i] = +prices[i].innerHTML;
}
function updateTotal(){
    let total = 0 ;
    for(let i in quantitys)
    total += arrOfPrices[i]*arrOfQuantitys[i];

    document.getElementById('totale-price').textContent=`TOTALE PRICE : ${total} $`;
}
updateTotal();

//********************PLUS_BUTTON*********************************/
for(let i in addButtons){
    addButtons[i].addEventListener("click",function(){
        arrOfQuantitys[i]++;
        quantitys[i].innerHTML = arrOfQuantitys[i];
        updateTotal();
    });
}

//********************MINUS_BUTTON*********************************/
for(let i in minusButtons){
    minusButtons[i].addEventListener("click",function(){
        if(arrOfQuantitys[i] > 1){
            arrOfQuantitys[i]--;
            quantitys[i].innerHTML = arrOfQuantitys[i];
            updateTotal();
        }
    });
}

for(let i in deletes){
    deletes[i].addEventListener("click",function(){
        arrOfQuantitys[i] = 0;
        updateTotal();
        parents[i].remove();
    });
}

for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('src') == "RES/heartNull.png")
        hearts[i].setAttribute('src','RES/heartLike.png');
        else
        hearts[i].setAttribute('src','RES/heartNull.png');
    });
}


// add to cart
    var noti = document.querySelector('h4');
    var select = document.getElementsByClassName("list-group");
	var button = document.getElementsByClassName("des-boutons");
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')
			// add new row //
            var maindiv=document.getElementsByClassName('list-group-item-add');
			var newDiv = document.createElement('div');
            document.body.insertBefore(newDiv,maindiv);
            var newContent = document.createTextNode('This Item :');
            newDiv.appendChild(newContent);
		})
	}