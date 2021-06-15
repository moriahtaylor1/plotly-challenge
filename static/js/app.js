//USE D3 LIBRARY TO READ IN JSON FILE//

function init() {
    //select HTML dropdown element
    var dropdown = d3.select("#selDataset")
    //get data from json file
    d3.json("./samples.json").then(function(data){
        //append sample id numbers to dropdown menu
        data.names.forEach((sample) => {
            dropdown.append("option")
                    .text(sample)
                    .property("value", sample)
        })
    })
}

init();