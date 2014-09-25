var width = 300,
    height = 100,
    fhou = d3.time.format("%H:"),
    fmin = d3.time.format("%M:"),
	fsec = d3.time.format("%S");
var vis = d3.select("#clock").append("svg")
    .attr("width", width)
    .attr("height", height);
var g = vis.selectAll("g")
    .data(fields)
  .enter()
  .append("g");
g.append("text")   
    .text(function(d) { return d.text; });


// Update arcs.
d3.timer(function() {
  var g = vis.selectAll("g")
      .data(fields);
  g.select("text")
  .attr("fill", "rgb(234,184,206)")
  .attr("stroke","rgb(255,102,153)")
  .attr("stroke-width",2)
      
      .attr("transform", function(d) {
		//  d.index + sectorWidth)*150 
		if(d.index==0.5){
		 return "translate(" +  1+ ",88.6)"	;
			}
			if(d.index==0.6){
		 return "translate(" +  93 + ",88.6)";	
			}
			if(d.index==0.7){
		 return "translate(" +  183 + ",88.6)";	
			}
		else{	
        return "translate(" +  199  + ",88.6)";
		}
      })
      .text(function(d) { return d.text; });
});

// Generate the fields for the current date/time.
function fields() {
  var d = new Date();

  var  hour = (d.getHours() + minute) / 24,
       minute = (d.getMinutes() + second) / 60,
       second = (d.getSeconds() + d.getMilliseconds() / 1000) / 60;
  return [
   {value: hour,    index: 0.5, text: fhou(d)},
    {value: minute,  index: 0.6, text: fmin(d)},
    {value: second,  index: 0.7, text: fsec(d)},
   
  ];
}