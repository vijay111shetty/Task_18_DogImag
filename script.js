console.log("hello world");

const api_call = async()=>{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const response_final = await response.json();
    console.log(response_final.message)
    let component = document.querySelector("img");
    component.setAttribute("src",`${response_final.message}`)
}

console.log(api_call())

let button_component = document.querySelector("button")

button_component.addEventListener("click",api_call)