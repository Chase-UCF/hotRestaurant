var reservations = require("../data/tableData.js");
var waitingList = require("../data/waitinglistData.js");



module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        return res.json(reservations);
    });
    app.get("/api/waitinglist", function(req, res) {
        return res.json(waitingList);
    });
    app.get("/api/tables/:customerName", function(req, res) {
        var chosen = req.params.customerName.toLowerCase();
        console.log(chosen);
        for (var i = 0; i < reservations.length; i++) {
            if (chosen === reservations[i].customerName.toLowerCase()) {
                return res.json(reservations[i]);
            }
        }
        return res.send(chosen);
    });
    app.get("/api/waitinglist/:customerName", function(req, res) {
        var selected = req.params.customerName;
        console.log(selected);
        for (var i = 0; i < waitingList.length; i++) {
            if (selected === waitingList[i].customerName) {
                return res.json(waitingList[i]);
            }
        }
        return res.send(selected);
    });
    app.post("/api/new", function(req, res){
    	var newTable = req.body;
    	newTable.customerName = newTable.customerName.replace(/\s+/g, "").toLowerCase();
    	console.log(newTable);
    	reservations.push(newTable);
    	res.json(newTable);
    });
};
