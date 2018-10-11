
                                                    var svg = d3.select("svg"),
                                                        width = svg.attr("width"),
                                                        height = svg.attr("height"),
                                                        radius = Math.min(width, height) / 2;
                                                    
                                                    var g = svg.append("g")
                                                               .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
                                            
                                                    var color = d3.scaleOrdinal(['#07a50f','#f78e06','#8d948d','#cc0605','#273746','#7E5109']);
                                            
                                                    var pie = d3.pie().value(function(d) { 
                                                            return d.population; 
                                                        });
                                            
                                                    var path = d3.arc()
                                                                 .outerRadius(radius - 10)
                                                                 .innerRadius(0);
                                            
                                                    var label = d3.arc()
                                                                  .outerRadius(radius)
                                                                  .innerRadius(radius - 80);
                                            
                                                    d3.json("data.json", function(error, data) {
                                                        if (error) {
                                                            throw error;
                                                        }
                                                        var arc = g.selectAll(".arc")
                                                                   .data(pie(data))
                                                                   .enter().append("g")
                                                                   .attr("class", "arc");
                                            
                                                        arc.append("path")
                                                           .attr("d", path)
                                                           .attr("fill", function(d) { return color(d.data.age); });
                                                    
                                                        console.log(arc)
                                                    
                                                        arc.append("text")
                                                           .attr("transform", function(d) { 
                                                                    return "translate(" + label.centroid(d) + ")"; 
                                                            })
                                                           .text(function(d) { return d.data.population; });
                                                        });
                                            
                                                        svg.append("g")
                                                           .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
                                                           .append("text")
                                                        //  .text("Browser use statistics - Jan 2017")    
                                                           .attr("class", "title")
