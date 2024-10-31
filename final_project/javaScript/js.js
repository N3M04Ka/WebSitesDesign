document.querySelector(".search_input").oninput = function(){
    let val=this.value.trim();
    let search_items=document.querySelectorAll(".film_name sapn b");
    if (val !=""){
        search_items.forEach(function(elem){
            if(elem.innerText.search(val)== -1)
            {
                elem.classList
            }
        });
    }
}