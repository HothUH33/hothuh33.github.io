addLayer("m", {
    name: "Main", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 10,
    color: "rgba(255,255,255,0.1"),
    tooltip: "Games",
    clickables:{  
        11: {
            display() {
                return a+cost
            },
            canClick() {return true},
            unlocked() {return true}, 
            onClick() {window.location.assign("https://hothuh33.github.io/The-ExisReality-Tree")},
            style: {"min-height"(){return "150px"}, 
                    "width"(){return "200px"},
	                  "border": "4px solid",
	                  "border-color"(){return "rgba(0, 0, 0, 0.5)"}, 
                    "color"(){return "#aaaaaa"},
                    "background-color"(){return "#442244"},
           },
        },
    },
})
