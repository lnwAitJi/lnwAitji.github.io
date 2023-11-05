let canPlaceOn = [];
let canDestroy = [];

function updateCanPlaceList() {
  let canPlaceList = document.getElementById("canPlaceList");
  canPlaceList.innerHTML = "";
  for (let i = 0; i < canPlaceOn.length; i++) {
    let item = canPlaceOn[i];
    let itemDiv = document.createElement("div");
    itemDiv.textContent = item;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      removeCanPlace(i);
    });
    itemDiv.appendChild(removeButton);
    canPlaceList.appendChild(itemDiv);
  }
  generateCommand();
}

function updateCanDestroyList() {
  let canDestroyList = document.getElementById("canDestroyList");
  canDestroyList.innerHTML = "";
  for (let i = 0; i < canDestroy.length; i++) {
    let item = canDestroy[i];
    let itemDiv = document.createElement("div");
    itemDiv.textContent = item;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      removeCanDestroy(i);
    });
    itemDiv.appendChild(removeButton);
    canDestroyList.appendChild(itemDiv);
  }
  generateCommand();
}

function addCanPlace() {
  let canPlaceInput = document.getElementById("canPlace").value;
  canPlaceOn.push(canPlaceInput);
  document.getElementById("canPlace").value = "";
  updateCanPlaceList();
}

function addCanDestroy() {
  let canDestroyInput = document.getElementById("canDestroy").value;
  canDestroy.push(canDestroyInput);
  document.getElementById("canDestroy").value = "";
  updateCanDestroyList();
}

function removeCanPlace(index) {
  canPlaceOn.splice(index, 1);
  updateCanPlaceList();
}

function removeCanDestroy(index) {
  canDestroy.splice(index, 1);
  updateCanDestroyList();
}

function generateCommand() {
  let itemType = document.getElementById("itemType").value;
  let playerName = document.getElementById("playerName").value;
  let id = document.getElementById("id").value;
  let count = document.getElementById("count").value;

  let jsonBlocks = {};

  if (canPlaceOn.length > 0 || canDestroy.length > 0) {
    if (canPlaceOn.length > 0) {
      jsonBlocks["minecraft:can_place_on"] = { blocks: canPlaceOn };
    }
    if (canDestroy.length > 0) {
      jsonBlocks["minecraft:can_destroy"] = { blocks: canDestroy };
    }
  }

  let command = `give ${playerName} ${itemType} ${count} ${id}`;

  if (Object.keys(jsonBlocks).length > 0) {
    command += ` ${JSON.stringify(jsonBlocks)}`;
  }

  document.getElementById("commandOutput").value = command;
}


  document.getElementById("commandOutput").value = command;
}

function copyCommandOutput() {
  let commandOutput = document.getElementById("commandOutput");
  commandOutput.select();
  document.execCommand("copy");
}

document.getElementById("itemType").addEventListener("input", generateCommand);
document.getElementById("playerName").addEventListener("input", generateCommand);
document.getElementById("id").addEventListener("input", generateCommand);
document.getElementById("count").addEventListener("input", generateCommand);

document.getElementById("canPlaceAddButton").addEventListener("click", addCanPlace);
document.getElementById("canDestroyAddButton").addEventListener("click", addCanDestroy);