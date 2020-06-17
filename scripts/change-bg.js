document.querySelector("#color-picker").addEventListener("input", function (e) {
    let hexCode = e.target.value

    if (hexCode.charAt(0) !== "#") {
        document.querySelector("body").setAttribute("style", `background-color: #${hexCode}`)
    } else {
        document.querySelector("body").setAttribute("style", `background-color: ${hexCode}`)
    }
})