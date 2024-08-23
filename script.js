var firstNo= 20;
var secondNo= 10;
var add= `Sum 0f ${firstNo} and ${secondNo} is ${firstNo+secondNo} <br/>`; 
document.write(add);
document.write("<h2>Part 2</h2>");
var subtract= `Subtraction 0f ${firstNo} and ${secondNo} is ${firstNo-secondNo} <br/>`; 
document.write(subtract);

var multiplication= `Multiplication  0f ${firstNo} and ${secondNo} is ${firstNo*secondNo} <br/>`; 
document.write(multiplication);

var division= `Division 0f ${firstNo} and ${secondNo} is ${firstNo/secondNo} <br/>`; 
document.write(division);

var modulus= `Modulus 0f ${firstNo} and ${secondNo} is ${firstNo%secondNo} <br/>`; 
document.write(modulus);
document.write("<h2>Part 3</h2>");

var no;
var declaration = `Value after variable declaration is ${no} <br/> `;
document.write(declaration);

var no=3;
var initialization= `Initiaal value: ${no} <br/>`;
document.write(initialization);
var increment= `Value after increment: ${++no} <br/>`;
document.write(increment);
var addition=`Value after addition is: ${no+7} <br/>`;
document.write(addition);
var no=11;
var decrement= `Value after decrement: ${--no} <br/>`;
document.write(decrement);
var remainder = `The remainder is: ${no/3}`;
document.write(remainder)

document.write("<h2>Part 4</h2>");
var costOfTicket=600;
var quantity=5;
var totalCost=`Total cost to buy ${quantity} tickets to a movie is ${quantity*costOfTicket}PKR<br/>`;
document.write(totalCost);

document.write("<h2>Part 5</h2>");
var no=4;
document.write(`${no} x 1 = ${no} <br/>`);
document.write(`${no} x 2 = ${no*2} <br/>`);
document.write(`${no} x 3 = ${no*3} <br/>`);
document.write(`${no} x 4 = ${no*4} <br/>`);
document.write(`${no} x 5 = ${no*5} <br/>`);
document.write(`${no} x 6 = ${no*6} <br/>`);
document.write(`${no} x 7 = ${no*7} <br/>`);
document.write(`${no} x 8 = ${no*8} <br/>`);
document.write(`${no} x 9 = ${no*9} <br/>`);
document.write(`${no} x 10 = ${no*10} <br/>`);


document.write("<h2>Part 6</h2>");
var celsiusTemperature= 37;
var fahrenheitTemperature= 28;
var conversionOfFt= (fahrenheitTemperature-32)*5/9;
document.write(`${fahrenheitTemperature}F is ${conversionOfFt}C <br/>`);
var conversionofCt=(celsiusTemperature*9/5)+32;
document.write(`${celsiusTemperature}C is ${conversionofCt}F `);

document.write("<h2>Part 7</h2>");
var priceOfItem1= 650;
var priceOfItem2=100;
var item1Quantity= 3;
var item2Quantity= 7;
var shippingCharges= 100;
document.write(`Price of item 1 is ${priceOfItem1} <br/>`);
document.write(`Quantity of item 1 is ${item1Quantity} <br/>`)
document.write(`Price of item 2 is ${priceOfItem2} <br/>`);
document.write(`Quantity of item 2 is ${item2Quantity} <br/>`);
document.write(`Shipping charges ${shippingCharges} <br/>`);
document.write(`Total cost of your order is ${priceOfItem1*3+priceOfItem2*7+shippingCharges}`);

document.write("<h2>Part 8<h2/>");
document.write("Mark Sheet <br/>");
var marksObtained= 350;
var totalMarks= 500;
document.write(`Total marks: ${totalMarks} <br/> Obtained marks: ${marksObtained}<br/> Percentage: ${marksObtained/totalMarks*100}%`);

document.write("<h2>Part 9</h2>");
document.write("<h3>Currency in PKR</h3>")
var oneUsDollar= 104.80;
var oneSaudiDollar=28;
document.write(`Total currency in PKR: ${(oneUsDollar*10)+(oneSaudiDollar*25)}`);

document.write("<h2>Part 10</h2>");
var arthmetic=10;
document.write(`${(arthmetic+5)*10/2}`);

document.write("<h2>Part 11</h2>");
var currentYear= 2024;
var birthYear= 2002;
document.write(`Current Year: ${currentYear}<br/> Birth Year: ${birthYear}<br/> Age: ${currentYear-birthYear}`)


document.write("<h2>Part 12</h2>");
document.write("<h3>The Geometrizer</h3>");
var radiusOfCircle=20;
var pai=3.142;
document.write(`Radius of a circle: ${radiusOfCircle}<br/> The circumference is: ${2*pai*radiusOfCircle} <br/> The area is: ${pai*radiusOfCircle*radiusOfCircle}`);

document.write("<h2>Part 13</h2>");
document.write("<h3>The Life Time Supply Calculator</h3>");
var favSnack= "Chocolate";
var currentAge=15;
var maximumAge = 65;
var estimatedAmount = 3;
document.write(`Favorite Snack: ${favSnack} <br/> Current Age: ${currentAge}<br/> Estimated Maximum Age: ${maximumAge}<br/> Amount of snacks per day: ${estimatedAmount}<br/> You will need ${(maximumAge-currentAge)*3} to last you until the ripe old age of ${maximumAge}`)

