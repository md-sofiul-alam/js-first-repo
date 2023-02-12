const yellowButton = document.getElementById('yellow');
yellowButton.onclick = function () {
    document.getElementById('yellow').style.border= '5px solid yellow'};
    
document.getElementById('update-btn').addEventListener('click',function(){
        const input = document.getElementById('input-field');
        const inputText = input.value;
        const button = document.createElement('button');
        button.style.margin='6px';
        button.innerText = inputText;
        const btnContainer= document.getElementById('container-btn');
        btnContainer.appendChild(button)
        input.value = '';
    })