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
    //create initial data that appears on first load of page
    var initial = data.samples[0]    //pick first sample
    //create bar chart
    //INSERT CODE HERE
    //create bubble chart
    //INSERT CODE HERE
    //show metadata
    //INSERT CODE HERE
    })
}

init();

//CREATE A HORIZONTAL BAR CHART TO DISPLAY TOP 10 OTUs FOUND IN INDIVIDUAL//

//CREATE A BUBBLE CHART THAT DISPLAYS EACH SAMPLE
