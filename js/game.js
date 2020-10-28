d3.select("#animals")
    .on("click",function()
{
d3.select("#animalBox")
    .classed("hidden",false);
})
d3.select("#lion")
    .on("click",function()
{
    d3.select("#banner")
    .text("Lions are the only cats that live in group!")
})
d3.select("#elephant")
    .on("click",function()
{
    d3.select("#banner")
    .text("Elephants are the largest land animal!")
})       
d3.select("#hippo")
    .on("click",function()
{
    d3.select("#banner")
    .text("Hippos are large semi-aquatic mammals!")
})
d3.select("#griaffe")
    .on("click",function()
{
    d3.select("#banner")
    .text("Giraffes spend most of their lives standing up; they even sleep and give birth standing up!")
})
d3.select("#cat")
    .on("click",function()
{
    d3.select("#banner")
    .text("Cats conserve energy by sleeping for an average of 13 to14 hours a day!")
})
d3.select("#ferret")
    .on("click",function()
{
    d3.select("#banner")
    .text("The name ferret is derived from the Latin word furittus, meaning little thief!")
})
d3.select("#bunny")
    .on("click",function()
{
    d3.select("#banner")
    .text("The rabbit is known for its speed, agility, and endurance!")
})

d3.select("#lion")
    .on("mouseenter",function()
{
   d3.select("#lion")
    .attr("src","pics/babylion.jpg");
})
d3.select("#elephant")
    .on("mouseenter",function()
{
   d3.select("#elephant")
    .attr("src","pics/baby elephant.jpg");
})
d3.select("#hippo")
    .on("mouseenter",function()
{
   d3.select("#hippo")
    .attr("src","pics/baby hippo.jpg");
})
d3.select("#griaffe")
    .on("mouseenter",function()
{
   d3.select("#griaffe")
    .attr("src","pics/baby giraffes.jpg");
})
d3.select("#cat")
    .on("mouseenter",function()
{
   d3.select("#cat")
    .attr("src","pics/baby cat.jpg");
})
d3.select("#ferret")
    .on("mouseenter",function()
{
   d3.select("#ferret")
    .attr("src","pics/baby ferret.jpg");
})
d3.select("#bunny")
    .on("mouseenter",function()
{
   d3.select("#bunny")
    .attr("src","pics/baby bunny.jpg");
})