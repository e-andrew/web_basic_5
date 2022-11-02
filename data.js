function onLoad(e) {
    const params = new URLSearchParams(window.location.search.substring(1));
    params.forEach((par) => {
        var element = document.createElement("p");
        element.innerText = par;
        document.body.appendChild(element);
    })
}

window.addEventListener('load', onLoad);
