/*jslint browser: true,
    devel: true,
    plusplus: true,
    maxerr: 1,
    indent: 4,
    maxlen: 85 */

window.onload = function () {
    "use strict";

    var button = document.getElementsByTagName("button")[0],
        qty,
        description,
        cost;

    function addRow() {
        qty = document.getElementById("qty").value;
        description = document.getElementById("description").value;
        cost = document.getElementById("cost").value;

        /* Create a reference to the existing <tbody> element in the HTML document. */
        var tbody = document.getElementsByTagName("tbody")[0];
        var tr = document.createElement("tr");
        var tdQty = document.createElement("td");
        var tdDescription = document.createElement("td");
        var tdCost = document.createElement("td");
        var tnQty = document.createTextNode(qty);
        var tnDescription = document.createTextNode(description);
        var tnCost = document.createTextNode(cost);

        tdQty.appendChild(tnQty);
        tdDescription.appendChild(tnDescription);
        tdCost.appendChild(tnCost);
        tr.appendChild(tdQty);
        tr.appendChild(tdDescription);
        tr.appendChild(tdCost);
        tbody.appendChild(tr);
    }

    button.addEventListener("click", addRow, false);
};
