document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { id: "japanproject", url: "https://github.com/pooooooon/JavaPlayer" },
        { id: "bluemyth", url: "https://github.com/BlueMyth-Network" },
        { id: "cmgmmo", url: "../minecraft/" },
        { id: "cmgmmodis", url: "https://discord.com/invite/JjchmEtqXp" },
        { id: "project", url: "./ProJect/" },
        { id: "connect", url: "https://lnwaitji.github.io/Minecraft/CMGMMO?ontab=true" },
        { id: "back", url: "https://lnwAitJi.github.io?ontab=true" },
        { id: "r", url: "https://lnwAitJi.github.io/database?ontab=true" },
        { id: "server", url: "./Server/" }
    ];

    buttons.forEach(button => {
        const element = document.getElementById(button.id);
        if (element) {
            element.addEventListener("click", () => {
                if(button.url.endsWith("?ontab=true")){
                  const herfTo = button.url.split("?onTab=true")[0] ?? button.url
                  window.location.href = herfTo;
                  return
                }
                if (button.url.startsWith("http")) window.open(button.url, "_blank");
                else window.location.href = button.url;
                
            });
        } else {
            console.error(`Element with ID '${button.id}' not found.`);
        }
    });
});