const createBtn=document.querySelector("#CreateButton")
const notes_Container=document.querySelector(".notes-container")


notes_Container.addEventListener('click',(e)=>{
    if(e.target.tagName==="BUTTON" || e.target.tagName==="IMG"){
        e.target.parentElement.parentElement.remove();
        saveDate();
    }else if(e.target.tagName==="P"){
        let notes=document.querySelectorAll(".notes");
        notes.forEach((div)=>{
            div.onkeyup=()=>{
                saveDate();
            }
        })
    }
})
createBtn.addEventListener('click',()=>{
    let notes=document.createElement("div");
    notes.setAttribute("class","notes");
    let para=document.createElement("p");
    para.setAttribute("class","input-box");
    para.setAttribute("contenteditable",true);
    para.setAttribute("spellcheck",false);
    notes.appendChild(para);
    let btnDel=document.createElement("button");
    btnDel.setAttribute("id","delBtn");
    let img1=document.createElement("img");
    img1.setAttribute("src","img/del.png");
    notes.appendChild(btnDel).appendChild(img1);
    notes_Container.appendChild(notes)

   
  
})
function saveDate(){
    localStorage.setItem("data",notes_Container.innerHTML);
}
function loadDate(){
    notes_Container.innerHTML=localStorage.getItem("data");
}
loadDate();
document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        document.execCommand("insestLineBreak");
        e.preventDefault();
    }
}
)