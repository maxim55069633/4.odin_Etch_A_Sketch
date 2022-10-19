let BlackAddedColor=80;

function changeUnitColor(e){


    // version 1.1 hsl can generate 10 random color. However, 
    // The first color should be its original color instead of white. So I decided to start from 80 in colorlightness.
    // Everytime a uesr move its mouse over a new area, it decreases 8 in colorlightness.

    //I also found a new method color-mix(). Unfortunately, most major browsers don't support it.


    let randomHue = Math.floor(Math.random()*361);
    let randomSaturation = Math.floor(Math.random()*101);
    let blackAddedColor = `hsl(${randomHue}, ${randomSaturation}%, ${BlackAddedColor}%)`;
    this.style.backgroundColor = blackAddedColor;
    if(BlackAddedColor >0)
    BlackAddedColor =BlackAddedColor-8;

    // version 1.0 only a single color
    // this.classList.add("newColor");
}

function createDivs(n)
{

    let containerDiv = document.querySelector(".container");
    containerDiv.innerHTML=``;
    for(let i=0; i<n; i++)
    {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for(let j=0; j<n; j++)
        {
            let unitDiv =document.createElement('div');
            unitDiv.classList.add('unit');
            // unitDiv.textContent=i*16+j+1;// for test purpose

            rowDiv.appendChild(unitDiv);

        }

        containerDiv.appendChild(rowDiv);
    }

    //prepare to change the color
    let myUnits = document.querySelectorAll('.unit');
    myUnits.forEach(unit=> unit.addEventListener('mouseover', changeUnitColor)
    );


}


createDivs(16);

function changeDivsGrid()
{

    let numberPerSideForSquare=prompt("The number should be a positive integer between 1 and 100",10);
    while( true )
    {
        if ( numberPerSideForSquare >= 1 && numberPerSideForSquare <= 100 )
            break;
        else 
            numberPerSideForSquare=prompt("Please enter a legit input! The number should be a positive integer between 1 and 100",10);
    }
    createDivs(numberPerSideForSquare);
    BlackAddedColor=80;
}

let myInstructionButton=document.getElementById("enterNumberForSqaure");
myInstructionButton.addEventListener('click', changeDivsGrid);

