function addElementById(hiddenClassAdd){
    const element =document.getElementById(hiddenClassAdd);
    element.classList.add('hidden')
}

function removeElementById(removeClassAdd){
    const element =document.getElementById(removeClassAdd);
    element.classList.remove('hidden')
}


function getTextElementValueById(elementId){
    const element =document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element =document.getElementById(elementId)
    element.innerText = value;
}