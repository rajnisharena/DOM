// 3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

// ### Topics

//     - Get Element By Id, Create Element, Create Text Node, Append Child

// ### Sample Image

// ![Sample One](./Pic4.png)

// ### Tasks

//      Add another FAQ 'My New FAQ' to the list

// ### Output

// ![Output](./Pic5.png)

// fetching 
let top_parent = document.getElementsByClassName("accordion-homepage");
// section
let child_sec = top_parent.createElement("section");
child_sec.className="parent selected";
const child_sec_h3 = document.createElement("h3");
child_sec_h3.role="button";
child_sec_h3.textContent="my new faq";
// append
child_sec.appendChild(child_sec_h3);
top_parent.item(0);
top_parent.item(0).appendChild(child_sec);