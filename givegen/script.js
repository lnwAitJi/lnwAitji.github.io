function generateCommand() {
    let itemType = document.getElementById("itemType").value;
    let playerName = document.getElementById("playerName").value;
    let id = document.getElementById("id").value;
    let count = document.getElementById("count").value;
    
    let command = "give " + playerName + " " + itemType + " " + count + " " + id + " ";
    let canPlace = false;
    let canDes = false;
    let canPlaceItem = "";
    let canDesItem = "";

    if (canPlaceOn.length > 0) {
        canPlace = true;
        for (let i = 0; i < canPlaceOn.length; i++) {
            canPlaceItem += `"${canPlaceOn[i]}",`;
        }
        canPlaceItem = canPlaceItem.substring(0, canPlaceItem.length - 1);
    }

    if (canDestroy.length > 0) {
        canDes = true;
        for (let i = 0; i < canDestroy.length; i++) {
            canDesItem += `"${canDestroy[i]}",`;
        }
        canDesItem = canDesItem.substring(0, canDesItem.length - 1);
    }

    let base = "";

    if (canPlace === true && canDes === false) {
        base = `{"minecraft:can_place_on":{"blocks":[${canPlaceItem}]}}`;
    } else if (canPlace === false && canDes === true) {
        base = `{"minecraft:can_destroy":{"blocks":[${canDesItem}]}}`;
    } else if (canPlace === true && canDes === true) {
        base = `{"minecraft:can_place_on":{"blocks":[${canPlaceItem}]},"minecraft:can_destroy":{"blocks":[${canDesItem}]}}`;
    } else {
        base = "";
    }

    command += base;
    
    let deletedItems = canPlaceOn.concat(canDestroy);

    for (let i = 0; i < deletedItems.length; i++) {
        command = command.replace(`"${deletedItems[i]}",`, "");
        command = command.replace(`"${deletedItems[i]}"`, "");
    }
    command = command.replace(/,}/g, "}");
    command = command.replace(/,]/g, "]");

    document.getElementById("commandOutput").value = command;
}
