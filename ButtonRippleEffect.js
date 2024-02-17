let button = document.querySelector("button")
// let span = `<span></span> `

console.log(button)


button.addEventListener("click",(event)=>
{
    console.log(event)
    console.log(event.clientX - button.offsetLeft)
    console.log(event.clientY - button.offsetTop)

    
    
    let span = document.createElement("span")
    console.log(span)

    button.appendChild(span)

    console.log("event.clientX-span.offsetLeft")
    console.log(event.clientY - event.target.offsetTop)
    console.log(event.clientX - event.target.offsetLeft)

    //Both the cases are applicable

    span.style.top = `${event.clientY-button.offsetTop}px`
    span.style.left = `${event.clientX-button.offsetLeft}px`
    /*
    span.style.top = `${event.clientY - event.target.offsetTop}px`
    span.style.left = `${event.clientX - event.target.offsetLeft}px`
    */

    // The following is not appropriate
    // span.style.position.top = `${event.clientY-event.target.offsetTop}px`

    setTimeout(() => span.remove(), 0300);

})