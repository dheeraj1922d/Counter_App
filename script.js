 let countValue=document.querySelector('#count');
 function decrement(){
     let value=parseInt(countValue.textContent);
     value=value-1;
     countValue.textContent=value;
 }
 function increment(){
     let value=parseInt(countValue.textContent);
     value=value+1;
     countValue.textContent=value;

}


