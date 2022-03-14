//  var myArray = [{"id" :"04300006730","price":"100SRD"},
//  {"id":"8716376000705","price": "110SRD"},
// ]

var close = document.getElementById("myUL").style.display='none';

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (filter && txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("myUL").style.display='block';


        } else {

            li[i].style.display = "none";

        } 

    }

};
