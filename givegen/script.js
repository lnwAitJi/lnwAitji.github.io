let canPlaceOn = [];
let canDestroy = [];

function addCanPlace() {
    let blockType = document.getElementById("canPlace").value;
    if (blockType !== "") {
        canPlaceOn.push(blockType);
        document.getElementById("canPlaceContainer").insertAdjacentHTML("beforeend", "<input type='text' value='" + blockType + "' disabled><button type='button' onclick='removeCanPlace(this)'>-</button><br>");
        document.getElementById("canPlace").value = "";
    }
    generateCommand();
}

function addCanDestroy() {
    let blockType = document.getElementById("canDestroy").value;
    if (blockType !== "") {
        canDestroy.push(blockType);
        document.getElementById("canDestroyContainer").insertAdjacentHTML("beforeend", "<input type='text' value='" + blockType + "' disabled><button type='button' onclick='removeCanDestroy(this)'>-</button><br>");
        document.getElementById("canDestroy").value = "";
    }
    generateCommand();
}

function removeCanPlace(button) {
    let index = Array.prototype.indexOf.call(button.parentNode.children, button) - 1;
    canPlaceOn.splice(index, 1);
    button.parentNode.removeChild(button.previousSibling);
    button.parentNode.removeChild(button);
    generateCommand();
}

function removeCanDestroy(button) {
    let index = Array.prototype.indexOf.call(button.parentNode.children, button) - 1;
    canDestroy.splice(index, 1);
    button.parentNode.removeChild(button.previousSibling);
    button.parentNode.removeChild(button);
    generateCommand();
}

function generateCommand() {
    let itemType = document.getElementById("itemType").value;
    let playerName = document.getElementById("playerName").value;
    let command = "give " + playerName + " " + itemType + " 1 0 ";
    let canPlace = false
    let canDes = false
    let canPlaceItem = ""
    let canDesItem = ""
    if (canPlaceOn.length > 0) {
        canPlace = true
        for (let i = 0; i < canPlaceOn.length; i++) {
            canPlaceItem += `"${canPlaceOn[i]}",`;
        }
        canPlaceItem = canPlaceItem.substring(0, canPlaceItem.length - 1);
    }
    if (canDestroy.length > 0) {
        canDes = true
        for (let i = 0; i < canDestroy.length; i++) {
            canDesItem += `"${canDestroy[i]}",`;
        }
        canDesItem = canDesItem.substring(0, canDesItem.length - 1);
    }
    let base = ""
    if (canPlace === true && canDes === false) base = `{"minecraft:can_place_on":{blocks":[${canPlaceItem}]}}`
    else if (canPlace === false && canDes === true) base = `{"minecraft:can_destroy":{blocks":[${canDesItem}]}}`
    else if (canPlace === true && canDes === true) base = `{"minecraft:can_place_on":{"blocks":[${canPlaceItem}]},"minecraft:can_destroy":{"blocks":[${canDesItem}]}}`
    else base = ""
    command += base
    document.getElementById("commandOutput").value = command;
}