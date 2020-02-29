const printToDom = (divId,textToPrint) => {
    //const selectedDiv = $('#tank')
     $(`#${divId}`).html(textToPrint); //new improved printToDom for jquery
    //selectedDiv.innerHTML = textToPrint;
    
};

export default { printToDom };