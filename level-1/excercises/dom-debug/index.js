const colors = ["red", "blue", "green", "purple", "yellow"];

function createSubItem(e){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue.value;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
};

//console.dir(subItemValue); can't get this to work, not sure why, need to ask,
//also unsure why adding .value fixed subItemValue problem

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem);
});

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option"); 
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    };
    dropDown.addEventListener("change", function(e){
        e.target.parentNode.style.backgroundColor = e.target.value
    })
    return dropDown
};

//didn't know existed parentNode 