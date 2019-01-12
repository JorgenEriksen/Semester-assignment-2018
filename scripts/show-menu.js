var menu = document.getElementById("menu-container");
var categorieTitle = document.createElement("h2");
var box = document.createElement("DIV");
var header = document.createElement("H3");
var para = document.createElement("P");
var span1 = document.createElement("SPAN");
var span2 = document.createElement("SPAN");

var check = [true, true, true, true];

(function () {

    //Code that will run automatically when the page has loaded
    showMenu();

    //functions under here

    // Change boolean when Ice Cream Checkbox is clicked
    document.getElementById("iceCreamsCheck").onclick = function () {
        console.log("click!");
        check[0] = !check[0];
    }

    // Change boolean when Sundaes Checkbox is clicked
    document.getElementById("sundaesCheck").onclick = function () {
        console.log("click!");
        check[1] = !check[1];
    }

    // Change boolean when Mousses Checkbox is clicked
    document.getElementById("moussesCheck").onclick = function () {
        console.log("click!");
        check[2] = !check[2];
    }

    // Change boolean when Smoothies Checkbox is clicked
    document.getElementById("smoothiesCheck").onclick = function () {
        console.log("click!");
        check[3] = !check[3];
    }

    //sort by name when the Sort By Name button is clicked
    document.getElementById("sort-by-name").onclick = function () {
        for (i = 0; i < categories.length; i++) {
            iceCreams[categories[i]].sort(function (a, b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
        }
        showMenu();
    }

    //sort by price when the Sort By Price button is clicked
    document.getElementById("sort-by-price").onclick = function () {
        for (i = 0; i < categories.length; i++) {
            iceCreams[categories[i]].sort(function (a, b) {
                return a.price - b.price
            });
        }
        showMenu();
    };

    //sort by description when the Sort By Description button is clicked
    document.getElementById("sort-by-description").onclick = function () {
        for (i = 0; i < categories.length; i++) {
            iceCreams[categories[i]].sort(function (a, b) {
                var x = a.description.toLowerCase();
                var y = b.description.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
        }
        showMenu();
    }

    //show the menu
    function showMenu() {

        console.clear();

        //Removing menu
        menu = document.getElementById("menu-container");
        menu.innerHTML = '';

        //Creating the menu to the page
        for (j = 0; j < categories.length; j++) {
            categorieTitle = document.createElement("h2");
            categorieTitle.innerHTML = categories[j];
            categorieTitle.classList.add("categorie-title"); // ha denne classen på h3 også?
            menu.appendChild(categorieTitle);

            for (i = 0; i < iceCreams[categories[j]].length; i++) {
                console.log(categories[i]);

                if (isItChecked() == true) {
                    box = document.createElement("DIV")
                    box.classList.add("menu-box");
                    menu.appendChild(box);

                    header = document.createElement("H3");
                    header.innerHTML = iceCreams[categories[j]][i].name;
                    header.classList.add("categorie-title");
                    box.appendChild(header);

                    para = document.createElement("P");
                    box.appendChild(para);

                    span1 = document.createElement("SPAN");
                    span1.innerHTML = iceCreams[categories[j]][i].description + ". ";
                    para.appendChild(span1);

                    span2 = document.createElement("SPAN");
                    span2.innerHTML = iceCreams[categories[j]][i].price + " NOK";
                    span2.classList.add("price");
                    para.appendChild(span2);
                }

            }

        }
    }

    function isItChecked() {
        if (categories[j] == "ice creams" && check[0] == false) {
            return false;
        } else if (categories[j] == "sundaes" && check[1] == false) {
            return false;
        } else if (categories[j] == "mousses" && check[2] == false) {
            return false;
        } else if (categories[j] == "smoothies" && check[3] == false) {
            return false;
        } else {
            return true;
        }
    }

})();