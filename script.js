const eventButton = document.getElementById("btn")

const calcIMC = () => {
    const name = document.getElementById("name").value
    const height = document.getElementById("height").value
    const weight = document.getElementById("weight").value
    const displayResult = document.getElementById("result")

    if (name === "" && height === "" && weight === "") {
        displayResult.innerHTML = "Preencha todos os campos!!!"
    } else {
        const result = (weight / (height * height)).toFixed(1)
        displayResult.innerHTML = `${name} seu IMC é ${result}`
    }
}


eventButton.addEventListener("click", calcIMC)



