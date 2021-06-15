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
        });
    //create initial data that appears on first load of page
    var initial = data.samples[0];    //pick first sample
    //create bar chart
    graphBar(initial);
    //create bubble chart
    //INSERT CODE HERE
    //show metadata
    //INSERT CODE HERE
    })
}

init();

//CREATE A HORIZONTAL BAR CHART TO DISPLAY TOP 10 OTUs FOUND IN INDIVIDUAL//
function graphBar(data){
    //create trace
    var trace = {
        x: data.sample_values,
        y: data.otu_ids,
        type: 'bar'
    };
    
    var graphData = [trace];

    //stylize
    var layout = {
        title: "Title",
        xaxis: { title: "X-Axis"},
        yaxis: {title: "Y-Axis"}
    };

    //plot chart to a div tag with id "bar"
    Plotly.newPlot("bar", graphData, layout)
    
}

//CREATE A BUBBLE CHART THAT DISPLAYS EACH SAMPLE
