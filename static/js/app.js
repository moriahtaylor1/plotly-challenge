//USE D3 LIBRARY TO READ IN JSON FILE//

function init() {
    d3.json("./samples.json").then(function(data){
        var values = data.sample_values;
        var ids = data.otu_ids;
        var labels = data.otu_labels;
        console.log(values);
        console.log(ids);
        console.log(labels);
    })
}

init();