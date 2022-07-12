
setTimeout(() => {
    try {
        document.getElementById("landingLogoCon").style.height = `${window.innerWidth / 2}px`;
    } catch (error) {
    }
}, 2000)
window.addEventListener("resize", () => {
    document.getElementById("landingLogoCon").style.height = `${window.innerWidth / 2}px`;
})