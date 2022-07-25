
function get(id) {
    return document.getElementById(id);
}

function closeSidebar() {
    const sidebar = get("sidebar");
    const sidebarBg = get("sidebarBg");
    sidebar?.classList.replace("w-24", "w-0");
    sidebarBg?.classList.replace("bg-opacity-50", "hidden");
}

function openSidebar() {
    const sidebar = get("sidebar");
    const sidebarBg = get("sidebarBg");
    sidebarBg?.classList.remove("hidden");
    sidebarBg?.classList.add("bg-opacity-0")
    setTimeout(() => {
        sidebarBg?.classList.replace("bg-opacity-0", "bg-opacity-50");
    }, 0);
    sidebar?.classList.replace("w-0", "w-24");
}

export { closeSidebar, openSidebar }