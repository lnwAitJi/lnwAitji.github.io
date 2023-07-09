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
    let canPlace = "";
    let canDestroy = "";
    if (canPlaceOn.length > 0) {
        canPlace = '"minecraft:can_place_on":{"blocks":[';
        for (let i = 0; i < canPlaceOn.length; i++) {
            canPlace += '"' + canPlaceOn[i] + '",';
        }
        canPlace = canPlace.slice(0, -1) + ']},';
    }

    if (canDestroy.length > 0) {
        canDestroy = '"minecraft:can_destroy":{"blocks":[';
        for (let i = 0; i < canDestroy.length; i++) {
            canDestroy += '"' + canDestroy[i] + '",';
        }
        canDestroy = canDestroy.slice(0, -1) + ']},';
    }

    let commandOutput = command;
    if (canPlace !== "" || canDestroy !== "") {
        commandOutput += '{' + canPlace + canDestroy.slice(0, -1) + '}';
    }

    document.getElementById("commandOutput").value = commandOutput;
}