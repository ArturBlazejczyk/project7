const h1 = document.querySelector('h1')
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = x + ', ' + y;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
})


/*
document.body.addEventListener('mousemove', (e) => {

    // h1.textContent = `${e.pageX}, ${e.pageY}`; // pozycja wzgledem poczatku dokumentu

    h1.textContent = `${e.clientX}, ${e.clientY}`; // pozycja wzgledem okna przegladarki

    // h1.textContent = `${e.screenX}, ${e.screenY}`; // pozycja wzgledem ekranu

    document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX / e.clientY *20})`;

    // document.body.style.backgroundColor = 'rgb(' + e.clientX / 3 + ','+ e.clientY / 2 +',' + e.clientX / e.clientY * 20 + ')';
})
*/