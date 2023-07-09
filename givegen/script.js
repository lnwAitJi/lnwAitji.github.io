let canPlaceOn = [];
let canDestroy = [];

function addBlock(container, blockArray) {
    let blockType = container.querySelector("input").value;
    if (blockType !== "") {
        blockArray.push(blockType);
        let input = document.createElement("input");
        input.type = "text";
        input.value = blockType;
        input.disabled = true;
        let button = document.createElement("button");
        button.type = "button";
        button.textContent = "-";
        button.addEventListener("click", () => removeBlock(container, blockArray, input, button));
        container.appendChild(input);
        container.appendChild(button);
        container.appendChild(document.createElement("br"));
        container.querySelector("input").value = "";
        generateCommand();
    }
}

function addCanPlace() {
    addBlock(document.getElementById("canPlaceContainer"), canPlaceOn);
}

function addCanDestroy() {
    addBlock(document.getElementById("canDestroyContainer"), canDestroy);
}

function removeBlock(container, blockArray, input, button) {
    let index = Array.prototype.indexOf.call(container.children, input) - 1;
    blockArray.splice(index, 1);
    container.removeChild(input);
    container.removeChild(button);
    generateCommand();
}

function generateCommand() {
    let itemType = document.getElementById("itemType").value;
    let playerName = document.getElementById("playerName").value;
    let command = "give " + playerName + " " + itemType + " 1 0 ";
    if (canPlaceOn.length > 0) {
        command += `{"minecraft:can_place_on":{"blocks":[`;
        for (let i = 0; i < canPlaceOn.length; i++) {
            command += `"${canPlaceOn[i]}",`;
        }
        command = command.substring(0, command.length - 1);
        command += "]}}";
    }
    if (canDestroy.length > 0) {
        command += `{"minecraft:can_destroy":{"blocks":[`;
        for (let i = 0; i < canDestroy.length; i++) {
            command += `"${canDestroy[i]}",`;
        }
        command = command.substring(0, command.length - 1);
        command += "]}}";
    }
    document.getElementById("commandOutput").value = command;
}

document.getElementById("canPlace").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addCanPlace();
        event.preventDefault();
    }
});

document.getElementById("canDestroy").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addCanDestroy();
        event.preventDefault();
    }
});

document.querySelector("#canPlaceContainer button").addEventListener("click", addCanPlace);
document.querySelector("#canDestroyContainer button").addEventListener("click", addCanDestroy);

document.getElementById("itemType").addEventListener("input", generateCommand);
document.getElementById("playerName").addEventListener("input", generateCommand);
