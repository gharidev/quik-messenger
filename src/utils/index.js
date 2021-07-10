export const loadStyle = (css, id) => {
    var style =
        document.querySelector(`style[id="${id}"]`) ||
        document.createElement("style");
    style.id = id;
    style.type = "text/css";
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.querySelector("body").appendChild(style);
}

export const unloadStyle = (id) => {
    const style = document.querySelector(`style[id="${id}"]`);
    if (!style) {
        console.warn(`Style element with ${id} does not exist!`);
        return;
    }
    document.querySelector('body').removeChild(style);
}

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}