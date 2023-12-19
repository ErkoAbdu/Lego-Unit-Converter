window.onload = function(){
    //Variables for btn and the two diff pages the tool will have
    var letsGoBtn = document.getElementById("lets-go-btn");
    var startPage = document.getElementById("start-page");
    var converterTool = document.getElementById("converter-tool");

    //eventlistener on btn so once clicked it makes the welcome/instructions page become hidden and reveals the converter tool
    letsGoBtn.addEventListener("click", function(){
        startPage.style.display = "none"
        converterTool.style.display = "block"
    })
   //stud measure is in mm so I will need to convert this to other units of measure
    var stud = 8;

    //undefined variables for length, width, and the studs area
    var studsRequiredLength;
    var studsRequiredWidth;
    var totalStudsrequiredArea;

    //gridarea(16x16) and baseplatearea(48x48) is in studs
    var gridArea = 256;
    var basePlateArea = 2304;

    //amount of grids and baseplates required is undefined as this is reliant on the results from each conversion
    var amountOfGridRequired;
    var amountOfBaseplateRequired;
    
//This function will do the conversion from mm,cm etc.. to lego studs
function convertToStuds() {
    //selectedMeasurement will get what the user picks from the drop down so the switch case will know what converison it needs to do.
    const selectedMeasurement = document.getElementById("drop-down").value;
    //these variables width and length retrive the id's specified by the selectedWIdth or Length paramater 
    const length = document.getElementById("input-length").value;
    const width = document.getElementById("input-width").value;
    console.log("witdh:", width, "length", length)

    // if the input measurement is not in mm, convert to mm.
    //This switch case retrives the selected unit of measure from the drop down to know which converison needs to be done
    switch(selectedMeasurement){
        case "millimeters":
            studsRequiredLength = length / stud;
            studsRequiredWidth = width / stud;
            console.log('studsRequiredLength', studsRequiredLength)
            console.log('studsRequiredWidth', studsRequiredWidth)

            totalStudsrequiredArea = (studsRequiredLength * studsRequiredWidth).toFixed(2);
            //baseplates and grids are rounded up as you cant really buy .5 of a baseplate
            amountOfGridRequired = Math.ceil(totalStudsrequiredArea / gridArea);
            amountOfBaseplateRequired = Math.ceil(totalStudsrequiredArea / basePlateArea);
            console.log('totalStudsrequiredArea', totalStudsrequiredArea)
            console.log('amountOfGridRequired', amountOfGridRequired)
            console.log('amountOfBaseplateRequired', amountOfBaseplateRequired)
            break;
        case "centimeters":
            // 10 mm in a cm
            studsRequiredLength = length / (stud / 10);
            studsRequiredWidth = width / (stud / 10);
            console.log('studsRequiredLength', studsRequiredLength)
            console.log('studsRequiredWidth', studsRequiredWidth)

            totalStudsrequiredArea = (studsRequiredLength * studsRequiredLength).toFixed(2);
            //baseplates and grids are rounded up as you cant really buy .5 of a baseplate
            amountOfGridRequired = Math.ceil(totalStudsrequiredArea / gridArea);
            amountOfBaseplateRequired = Math.ceil(totalStudsrequiredArea / basePlateArea);
            console.log('totalStudsrequiredArea', totalStudsrequiredArea)
            console.log('amountOfGridRequired', amountOfGridRequired)
            console.log('amountOfBaseplateRequired', amountOfBaseplateRequired)
            break;
        case "inches":
            // 25.4mm in an inch
            studsRequiredLength = length / (stud / 25.4);
            studsRequiredWidth = width / (stud / 25.4);
            console.log('studsRequiredLength', studsRequiredLength)
            console.log('studsRequiredWidth', studsRequiredWidth)
        
            totalStudsrequiredArea = (studsRequiredLength * studsRequiredLength).toFixed(2);
            //baseplates and grids are rounded up as you cant really buy .5 of a baseplate
            amountOfGridRequired = Math.ceil(totalStudsrequiredArea / gridArea);
            amountOfBaseplateRequired = Math.ceil(totalStudsrequiredArea / basePlateArea);
            console.log('totalStudsrequiredArea', totalStudsrequiredArea)
            console.log('amountOfGridRequired', amountOfGridRequired)
            console.log('amountOfBaseplateRequired', amountOfBaseplateRequired)
            break;
        case "feet":
            // 304.8mm in a foot
            studsRequiredLength = length / (stud / 304.8);
            studsRequiredWidth = width / (stud / 304.8);
            console.log('studsRequiredLength', studsRequiredLength)
            console.log('studsRequiredWidth', studsRequiredWidth)

            totalStudsrequiredArea = (studsRequiredLength * studsRequiredLength).toFixed(2);
            //baseplates and grids are rounded up as you cant really buy .5 of a baseplate
            amountOfGridRequired = Math.ceil(totalStudsrequiredArea / gridArea);
            amountOfBaseplateRequired = Math.ceil(totalStudsrequiredArea / basePlateArea);
            console.log('totalStudsrequiredArea', totalStudsrequiredArea)
            console.log('amountOfGridRequired', amountOfGridRequired)
            console.log('amountOfBaseplateRequired', amountOfBaseplateRequired)
            break;
        case "meters":
            // 1000mm in a meter
            studsRequiredLength = length / (stud / 1000);
            studsRequiredWidth = width / (stud / 1000);
            console.log('studsRequiredLength', studsRequiredLength)
            console.log('studsRequiredWidth', studsRequiredWidth)

            totalStudsrequiredArea = (studsRequiredLength * studsRequiredLength).toFixed(2);
            //baseplates and grids are rounded up as you cant really buy .5 of a baseplate
            amountOfGridRequired = Math.ceil(totalStudsrequiredArea / gridArea);
            amountOfBaseplateRequired = Math.ceil(totalStudsrequiredArea / basePlateArea);
            console.log('totalStudsrequiredArea', totalStudsrequiredArea)
            console.log('amountOfGridRequired', amountOfGridRequired)
            console.log('amountOfBaseplateRequired', amountOfBaseplateRequired)
            break;
    }
    //if the user tries to convert any units with the drop down on the 'select' option it will return nothing
    if (selectedMeasurement === ""){
        return;
    }

    //results in studs
    var lengthResult = document.getElementById("length-result");
    var widthResult = document.getElementById("width-result");
    var results = document.getElementById("results");
    var gridResult = document.getElementById("grid-result");
    var basePlateResult = document.getElementById("baseplate-result");
    //I want to take the results and put it in to the span as well as make the text become block
    lengthResult.innerHTML = studsRequiredLength;
    widthResult.innerHTML = studsRequiredWidth;
    gridResult.innerHTML = amountOfGridRequired;
    basePlateResult.innerHTML = amountOfBaseplateRequired;
    results.style.display = "block" 
}
//variable for the btn
var convertBtn = document.getElementById("convert-btn");

//on click this btn will run the convertToStuds function to make the result msg visible and output the converted information
convertBtn.addEventListener("click", convertToStuds);
}