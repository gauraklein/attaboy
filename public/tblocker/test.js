var jdenticon = require("jdenticon"),
    fs = require("fs"),
    size = 200,
    value = "icon value",
    png = jdenticon.toPng(value, size);
    
fs.writeFileSync("./testicon.png", png);