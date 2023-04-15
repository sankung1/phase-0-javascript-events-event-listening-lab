const input = document.querySelector('#button');

function clickedAlert(){
    alert('I was clicked');
}

function addingEventListener() {
    input.addEventListener('click', clickedAlert);
}
