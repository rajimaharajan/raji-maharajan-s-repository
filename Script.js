const rainContainer = document.querySelector(".rain-container");

function createRainDrop() {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");

    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = (0.5 + Math.random()) + "s";
    drop.style.opacity = Math.random();

    rainContainer.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 2000);
}

// Continuous rain
setInterval(createRainDrop, 50);
