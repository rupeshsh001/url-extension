
let myLeads=[]
const leadls=document.getElementById("leads-list")
const input_val=document.getElementById("input-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const deltBtn=document.getElementById("delete_but")
const save_tab=document.getElementById("tab_btn")
const save_but=document.getElementById("save_but")
const strrr="https://"


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
save_tab.addEventListener("click",function(){
    console.log("button pressed")
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    

})
deltBtn.addEventListener("dblclick",function(){
    console.log("double click")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

save_but.addEventListener("click",function(){
    myLeads.push(strrr+(input_val.value))
    input_val.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
    console.log("button pressed")
    render(myLeads)
})

function render(leads){
    let listitems=""
    for(let i=0;i<leads.length;i++){
        //leadls.innerHTML+="<li>"+myLeads[i]+"</ li>"

        listitems+=`
        <li>
        <a target='-blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </ li>`
        
    }
    leadls.innerHTML=listitems
}