const section = t.$('#section')[0];
styleV();
window.onresize = styleV;

function styleV(){
    const iH = window.innerHeight;
    section.style.height = iH + 'px';
}