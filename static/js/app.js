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
    //create labels
    var labels = data.otu_ids.map(function(otu_number){
        return "OTU " + otu_number
    })
    //create trace
    var trace = {
        y: labels.slice(0,10),
        x: data.sample_values.slice(0,10),
        text: data.otu_labels.slice(0,10),
        type: 'bar',
        orientation: 'h'
    };
    
    var graphData = [trace];

    //stylize
    var layout = {
        title: "Title",
        xaxis: { title: "Count"},
        yaxis: {title: ""},
        width: 800
    };

    //plot chart to a div tag with id "bar"
    Plotly.newPlot("bar", graphData, layout)
    
}

//CREATE A BUBBLE CHART THAT DISPLAYS EACH SAMPLE
