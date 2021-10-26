/**********************
Author: Al Sebastian Ferreras
The function that creates the whole table
**********************/
function generateTable(){
    //Grab the elements we will populate
    tableDiv = document.getElementById('tableZone');
    errorZone = document.getElementById('error');
    
    //Clear the elements
    errorZone.innerHTML = "";
    tableDiv.removeChild(tableDiv.firstChild);
    
    
    var errorCaught = false;
    var errorMsg = 'Error: ';
    
    //Get value and make it a number
    var minX = Number(document.getElementById("minx").value);
    //Check if number breaks the range
    if(minX < -50 || minX > 50)
    {
        errorCaught = true;
        errorMsg += 'Values must be between -50 and 50. Making min column -50. '
        minX = -50;
    }
    
    var maxX = Number(document.getElementById("maxx").value);
    //Check if it's in the range and it's not bigger than the min
    if(maxX < -50 || maxX > 50)
    {
        errorCaught = true;
        errorMsg += 'Values must be between -50 and 50. Making max column 50. '
        maxX = 50;
    } else if(minX > maxX)
    {
        errorCaught = true;
        errorMsg += 'Min must be less than Max. Swapping the column values. '
        let a = minX;
        minX = maxX;
        maxX = a;
    }

    var minY = Number(document.getElementById("miny").value);
    if(minY < -50 || minY > 50)
    {
        errorCaught = true;
        errorMsg += 'Values must be between -50 and 50. Making min row -50. '
        minY = -50;
    }

    var maxY = Number(document.getElementById("maxy").value);
    if(maxY < -50 || maxY > 50)
    {
        errorCaught = true;
        errorMsg += 'Values must be between -50 and 50. Making max row 50. '
        maxY = 50;
        
    } else if(minY > maxY)
    {
        errorCaught = true;
        errorMsg += 'Min must be less than Max. Swapping the row values. '
        let a = minY;
        minY = maxY;
        maxY = a;
    }
    
    if(errorCaught)
    {
        errorZone.innerHTML = errorMsg;
    }

    var table = document.createElement('table');
    
    //Create first row of the table
    var firstRow = document.createElement('tr');
    var blankSpot = document.createElement('td');

    //Makes the blank spot in table
    blankSpot.className = 'blankTD';
    firstRow.appendChild(blankSpot);
    
    //Populates the first row in table
    for(let col = minX; col <= maxX; col++)
    {
        let entry = document.createElement('td');
        entry.innerHTML = col;
        firstRow.appendChild(entry);
    }
    
    //Give row class for styling
    firstRow.className = 'firstRow';
    //Attach it
    table.appendChild(firstRow);
    
    //Creates the rest of the table
    for(let rNum = minY; rNum <= maxY; rNum++)
    {
        let row = document.createElement('tr');
        let entry = document.createElement('td');
        //Create first column and gives it class for styling
        entry.className = 'firstCol'
        entry.innerHTML = rNum;
        row.appendChild(entry);
        //Creates the multipled part of table
        for(let colNum = minX; colNum <= maxX; colNum++)
        {
            let mult = document.createElement('td');
            mult.innerHTML = (colNum*rNum);
            mult.className = 'mult';
            row.appendChild(mult);
        }
        row.className = 'trow';
        table.appendChild(row);
    }

    //Puts table in the div
    tableDiv.appendChild(table);
}