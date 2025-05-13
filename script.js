function handleSubmit(event) {
            event.preventDefault(); // Prevent form submission
            
            document.body.innerHTML = "";
            const hackedMessage = document.createElement("div");
            hackedMessage.classList.add("hacked");
            hackedMessage.innerText = "Acesso garantido\nHackeando sistema...\nBaixando data do usuário...";
            document.body.appendChild(hackedMessage);
            
            let count = 0;
            const interval = setInterval(() => {
                hackedMessage.innerText += "\nERROR: SYSTEM OVERRIDE!";
                count++;
                if (count > 3) {
                    clearInterval(interval);
                    setTimeout(() => {
                        alert("Peguei seus dados se fodakkkkkkkkkkkk");
                        location.reload();
                    }, 2000);
                }
            }, 1000);
    
        }
document.addEventListener("DOMContentLoaded", () => {
    const sky = document.getElementById("sky");   
    const cloudNum = 25;

    function createClouds() { 
        const cloud = document.createElement("img");
        const randomSize = Math.random() * 800 + 400;
        const randomDuration = Math.random() * 30 + 30; // entre 30s e 60s
        const randomLeft = Math.random() * window.innerWidth;
        const randomOpacity = Math.random() * 0.5 + 0.5; // entre 0.5 e 1

        cloud.style.width = randomSize + "px";
        cloud.style.left = randomLeft + "px";
        cloud.style.top = window.innerHeight + "px";
        cloud.style.opacity = randomOpacity;
        cloud.style.animationDuration = randomDuration + "s";

        cloud.src = "img/cloud.png";
        cloud.classList.add("cloud");

        sky.appendChild(cloud);
    }

    for (let i = 0; i < cloudNum; i++) {
        createClouds(); 
    }
});
