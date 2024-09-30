let btn = document.querySelector("button")
let input = document.querySelector("input")
let list = document.querySelector("ul")
let btn2=document.querySelector(".btn")
btn.addEventListener("click",function()
{
    console.log("button clicked")
    let lst=document.createElement("li")
    let rmv=document.createElement("button")
    rmv.classList.add("btn")
    rmv.innerText="Remove";
    lst.innerText=input.value 
    lst.appendChild(rmv)
    console.log(lst)
    input.value="";
    list.appendChild(lst)
})
list.addEventListener("click",function(event)
{
    console.log(event.target)
    if(event.target.nodeName=="BUTTON")
    {
        let item=event.target.parentElement;
        console.log(item);
        item.remove();
    }
})

/*let delbtns=document.querySelectorAll(".btn")
 for(delbtn of delbtns)
 {
    delbtn.addEventListener("click",function(){
        let per= this.parentElement;
        console.log(per)
        per.remove()

    })
 }*/
