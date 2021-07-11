
    function clickme()
    {
        document.getElementById("a").style.color="red";
         document.getElementById("a").innerHTML="You clicked me!";
        console.log("You clicked me");
    }
    function mouseover()
    {
        document.getElementById("b").style.backgroundColor="pink";
        console.log("You did MouseOver");

    }

    function mouseout()
    {
        document.getElementById("b").style.backgroundColor="blue";
        console.log("You did MouseOut");

    }
    function keydow()
    {
        console.log("you are doing keydown");

    }
    function keyupp()
    {
        console.log("you are doing keyup");
    }
