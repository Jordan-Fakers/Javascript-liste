monStockage = localStorage;
let groupName = [];
let nom = document.querySelector("input")
let savedName = localStorage.getItem("groupName");
let genGroup = document.querySelector("#create-groupe")

let i = 0

document.querySelector("#add").addEventListener("click", function () {
    let myName = document.querySelector("#name").value;

    document.querySelector("#name").innerHTML = " ";
    groupName.push(nom.value)
    let tr = document.createElement("tr")
    tr.setAttribute("id","r"+i)
    tr.innerHTML =`<td>${nom.value}</td>
                <td><a id="a${i}" href="#"></a></td>`    
    tab.appendChild(tr)
    nom.value = ""

    let a = document.getElementById("a"+i)
    a.addEventListener("click",function(){
        let selected = a.id.substr(1)
        let row = document.getElementById("r"+selected)
        row.remove()
    })

    i++
});

genGroup.addEventListener("click",function() {
    console.log(groupName);

    let groups = {};
    let nb_groups = 3;
    let max_nb_groups = groupName.length / nb_groups;
    let groupe = [];

    while(groupName.length > 0) {
        for (i=0;i<nb_groups;i++){
            let duos = [];
            for(j=0;j<max_nb_groups;j++){
                let choice = Math.floor(Math.random()*groupName.length)
                let name = groupName[choice]
                console.log("choice = " + name)
                if(duos.indexOf(name)==-1){
                    duos.push(name)
                    groupName.pop(name)
                }
            }
            groupe.push(duos)
        }
    }
})