const eventButton = document.getElementById("btn")
eventButton.addEventListener("click", () => {
    const name = document.getElementById("name").value
    const height = document.getElementById("height").value
    const weight = document.getElementById("weight").value
    const displayResult = document.getElementById("result")

    if (name != "" && altura != "" && peso != "") {
        const result = (weight / (height * height)).toFixed(1)
        displayResult.innerHTML = `${name} seu IMC é ${result}`
    } else {
        displayResult.innerHTML = "Preencha todos os campos!!!"
    }

})


