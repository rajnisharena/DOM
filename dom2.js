// 2. Website Name: [Apple](https://support.apple.com/en-in)

// ### Task

// ![Store](./Picture_3.png)

// ### Fetch all the product name and store in an array

// ### Output

// ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']


let pro_box = document.querySelectorAll(".as-imagegrid-item-title")
let pro_name = new Array();
[...pro_box].forEach((ll) => {
    let naming = ll.firstChild.nodeValue; 
    let name = naming.trim();
    pro_name.push(name);
});
console.log(pro_name);