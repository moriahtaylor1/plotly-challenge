//UPDATE PLOTS WHENEVER A NEW SAMPLE IS SELECTED//
function optionChanged(newSample) {
    d3.json("./samples.json").then(function (data) {
        var filtered = data.samples.filter(row => row.id == newSample)
        console.log(filtered)
        graphBar(filtered[0])
        graphBubble(filtered[0])
        var filteredMeta = data.metadata.filter(row => row.id == newSample)
        showMeta(filteredMeta[0])
    })
}

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
    graphBubble(initial);
    //show metadata
    var meta = data.metadata[0];
    showMeta(meta);
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
    //initialize trace
    var graphData = [trace];
    //stylize
    var layout = {
        title: "Top 10 Bacteria Cultures Found",
        xaxis: { title: "Count"},
        yaxis: {title: ""},
        width: 500
    };
    //plot chart to a div tag with id "bar"
    Plotly.newPlot("bar", graphData, layout)
}

//CREATE A BUBBLE CHART THAT DISPLAYS EACH SAMPLE//
function graphBubble(data){
    //create labels
    var labels = data.otu_ids.map(function(otu_number){
        return "OTU " + otu_number
    })
    //create trace
    var trace = {
        x: data.otu_ids,
        y: data.sample_values,
        mode: 'markers',
        marker: {color: data.otu_ids,
                 size: data.sample_values,
                 colorscale: 'Viridis'},
        text: labels
    };
    //initialize trace
    var graphData = [trace];
    //stylize
    var layout = {
        title: "Bacteria Culture Per Sample",
        xaxis: { title: "OTU ID"},
        yaxis: {title: ""},
        showlegend: false,
        height: 700,
        width: 1200
    };
    //plot chart to a div tag with id "bubble"
    Plotly.newPlot("bubble", graphData, layout)
}

//SHOW METADATA//
function showMeta(data) {
    //select HTML element sample-metadata
    var ul = d3.select("#sample-metadata");
    //clear panel
    ul.html("")
    //append information to panel as list
    Object.entries(data).forEach(([keys, value]) => {
        ul.append("h5").text(`${keys} : ${value}`)
    })
}