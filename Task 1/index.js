function getWindowSize(){
    let ele = window.document.getElementById("windowSize");


    let width = window.innerWidth;
    let height = window.innerHeight;
    

    ele.innerHTML = `window width is : ${width} and height is: ${height}`;

}