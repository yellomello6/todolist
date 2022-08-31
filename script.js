add= document.getElementById("add");
add.addEventListener("click",  ()=> {
    console.log('Add') ;
    
    tit=document.getElementById('title').value; 
    desc=document.getElementById('description').value;
    console.log(tit);



    if (localStorage.getItem('itemsJson')){
        itemJsonArray=[];
        itemJsonArray.push([tit,desc])
    }

} );











remove=document.getElementById('remove');
remove.addEventListener("click", ()=> {
    console.log('removed');

});

