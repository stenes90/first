/* Create a menu-like structure inside the current project with the help of the forEach array method.
During the creation, callback function should check if any of the array element is empty, and if it is
should skip it. The menu array itself does not hold the "home" and "contact" items, which should appear at the
@@ -7,3 +45,12 @@ start and at the end position of the menu like structure, so they have to be add */

let menu = "";
let arr = ["about", "services"];
let nav = document.getElementById("nav-header");

arr.push("contact");
arr.unshift("home");

let itemIndex = arr.indexOf("home");
arr.forEach((item) => {
  if (item == "") {
    menu += "";
  } else {
    if (arr.indexOf(item) == 0) {
      if (menu.includes("<ul>")) {
        menu += "<li>" + item + "</li>";
      } else {
        menu += "<ul>" + "<li>" + item + "</li>";
      }
    } else if (arr.indexOf(item) == arr.length - 1) {
      if (menu.includes("</ul>")) {
        menu += "<li>" + item + "</li>";
      } else {
        menu += "<li>" + item + "</li>" + "</ul>";
      }
    } else {
      menu += "<li>" + item + "</li>";
    }
  }
});
console.log(menu);
nav.innerHTML = menu;
