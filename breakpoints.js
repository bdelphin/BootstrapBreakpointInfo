// Bootstrap size/breakpoint info
// https://github.com/bdelphin

// handleResize will be called each time the window is resized
window.addEventListener('resize', handleResize);

// first, let's add the HTML content
addHtml();
// then, call handleResize for the first time
handleResize();

function addHtml() {
    // sorry for the mess below ¯\_(ツ)_/¯
    document.querySelector('body').innerHTML += '<div style="position: fixed; right: 0; bottom: 0; padding: 5px 5px; border-radius: 5px 0 0 0; background-color: black; color: white; text-align: right;"><a href="https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints" target="_blank" title="More info about breakpoints on the doc !" style="color:white; text-decoration: none;"><div style="display: flex;"><img src="https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon-16x16.png" style="align-self: center; margin-left: 5px;"><span style="margin: 0 10px;" id="breakpoint_size"></span></div></a></div>';
}

function handleResize() {
    let breakpoint_size = document.getElementById('breakpoint_size');

    if(window.innerWidth < 576) {
        // XS
        breakpoint_size.innerHTML = window.innerWidth + "px (<576px) : size <strong>xs</strong>";
    } else if(window.innerWidth < 768) {
        // SM
        breakpoint_size.innerHTML = window.innerWidth + "px (≥576px) : size <strong>sm</strong>";
    } else if(window.innerWidth < 992) {
        // MD
        breakpoint_size.innerHTML = window.innerWidth + "px (≥768px) : size <strong>md</strong>";
    } else if(window.innerWidth < 1200) {
        // LG
        breakpoint_size.innerHTML = window.innerWidth + "px (≥992px) : size <strong>lg</strong>";
    } else if(window.innerWidth < 1400) {
        // XL
        breakpoint_size.innerHTML = window.innerWidth + "px (≥1200px) : size <strong>xl</strong>";
    } else {
        // XXL
        breakpoint_size.innerHTML = window.innerWidth + "px (≥1400px) : size <strong>xxl</strong>";
    }
}
