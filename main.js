document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const bloomPeriod = document.querySelector('input').value
    try{
        const response = await fetch(`https://worried-fox-button.cyclic.app/api/${bloomPeriod}`)
        const data = await response.json
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}