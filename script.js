document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { id: "japanproject", url: "https://github.com/pooooooon/JavaPlayer" },
        { id: "bluemyth", url: "https://github.com/BlueMyth-Network" },
        { id: "cmgmmo", url: "../minecraft/" },
        { id: "cmgmmodis", url: "https://discord.com/invite/JjchmEtqXp" },
        { id: "project", url: "./ProJect/" },
        { id: "connect", url: "../Minecraft/CMGMMO/" },
        { id: "back", url: "https://lnwAitJi.github.io" }
    ];

    buttons.forEach(button => {
        const element = document.getElementById(button.id);
        if (element) {
            element.addEventListener("click", () => {
                if(button.url.startsWith("https://lnwAitJi.github.io")){
                    window.location.href = button.url;
                    return
                }
                if (button.url.startsWith("http")) {
                    window.open(button.url, "_blank");
                } else {
                    window.location.href = button.url;
                }
            });
        } else {
            console.error(`Element with ID '${button.id}' not found.`);
        }
    });
});
