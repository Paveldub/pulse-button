let buttons = document.getElementsByClassName('butt'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});  

function addElement(e) {
    let addDiv = document.createElement('div'),
        myValue = Math.max(this.clientHeight, this.clientWidth),
        rect = this.getBoundingClientRect(),
        sDiv = addDiv.style,
        px = 'px';

        sDiv.width = sDiv.height = myValue + px;
        sDiv.left = e.clientX - rect.left - (myValue / 2) + px;
        sDiv.top = e.clientY - rect.top - (myValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
    console.log(myValue);
}