// 8. Webiste Name: [Google](https://www.google.com/)

// ### Topics

//        Remove Elements

// ### Sample Image

// ![Sample One](./Pic14.png)

// ### Tasks

//      Remove alternate languages from the home page languages listed

// ### Output

// ![Output](./Pic15.png)

let lg = document.querySelectorAll("#SIvCob a");
[...lg].forEach((ll) => {
    let ary = ['العربية']
    if(ary.includes(el.innerText))
    {
        ll.remove();
    }
});