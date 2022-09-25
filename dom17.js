// 17. Webiste Name: [Sony](https://www.sony.co.in/)

// ### Topics

//     querySelector,innerHTMl

// ### Sample Image

// ![Sample One](./Pic33.png)

// ### Tasks

//      change the button text To current Date.

// ### Output

// ![Output](./Pic32.png)

var date = new Date();
document.getElementById("GlobalFooter__SearchFormSubmit js-datalayer-action-event").value = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();