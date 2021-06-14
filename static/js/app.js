//USE D3 LIBRARY TO READ IN JSON FILE//

function init() {
    d3.json("samples.json").then(function(data){
        console.log(data);
    })
}

init();