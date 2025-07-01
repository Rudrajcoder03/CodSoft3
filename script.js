const display = document.getElementById('display')
 function append(value){
    display.value += value;
 }

 function cleardata(){
    display.value = '';
 }

 function deletedata(){
    display.value = display.value.slice(0, -1);
 }
 function calculate(){
    try{
        display.value = eval(display.value.replace(/%/g,'/100'));
    }
    catch{
        display.value = Error;
    }
 }
 function toggleview(){
    document.body.classList.toggle('dark');
 }