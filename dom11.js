// 11. Webiste Name: [realme](https://www.realme.com/in/)

// ### Topics

//        querySelector,style,background-image

// ### Sample Image

// ![Sample One](./Pic20.png)

// ### Tasks

//     change the realme logo to ineuron logo

// ### Output

// ![Output](./Pic21.png)

const logo = document.querySelector(".logo");
const img = document.createElement("img");
img.src="https://learn.ineuron.ai/_next/image?url=%2Fimages%2Fineuron-logo.png&w=750&q=75";
logo.removeChild(logo.firstElementChild);
logo.appendChild(img);