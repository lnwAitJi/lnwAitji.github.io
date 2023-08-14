const playerCountElement = document.getElementById("playerCount");

async function getPlayerCount() {
  try {
    const response = await fetch("https://api.mcsrvstat.us/bedrock/3/cmgmmo.mc.in.th:21356");
    const data = await response.json();
    if (data.players) {
      playerCountElement.textContent = data.players.online;
    } else {
      playerCountElement.textContent = "Server offline";
    }
  } catch (error) {
    console.error("Error fetching player count:", error);
    playerCountElement.textContent = "Error fetching player count";
  }
}

getPlayerCount();
