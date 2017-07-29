window.onload = function()
{
    document.getElementById('findNameBtn').addEventListener('click', lookForName);
    
    
}

function lookForName()
{
    var myName = "Eyvette";
    var timesFound = [];
    var text = document.getElementById('inputNameBox').value;
    
    for(var x = 0; x < text.length; x++)
    {
        if(text[x] === "E")
            {
                for(var y = x; y<(myName.length + x); y++)
                    {
                        timesFound.push(text[y]);
                    }
            }
    }    
                        
                    if(timesFound.length === 0)
                        {
                            alert("Your name wasn't found!");
                        }    
                                      
                    else
                        {
                            alert(timesFound);
                                      
                        }
                                      
      
}