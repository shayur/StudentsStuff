/*x_val and y_val are arrays of coordinates*/

var x_val = [0, 50, 100, 150, 200, 250, 300, 350];
var y_val = [0, 50, 100, 150, 200, 250, 300, 350];

var xc = 0;
var xy = 0;
var boxname = "str";
var x = 0;
var y = 0;
var c = 0;
function bo() {
  if (xc == 8) {
  } else {
    xy++;
    x = x_val[xc] + 150;
    y = y_val[xy] + 2;
    boxname = c.toString();
    hj = document.createElement("DIV");
    hj.setAttribute("id", boxname);
    document.body.appendChild(hj);
    document.getElementById(boxname).style.position = "absolute";
    document.getElementById(boxname).style.left = x.toString() + "px";
    document.getElementById(boxname).style.top = y.toString() + "px";

    if (xy == 7) {
      xc++;
      xy = 0;
    }
  }

  c++;
}

setInterval(bo, 70);
