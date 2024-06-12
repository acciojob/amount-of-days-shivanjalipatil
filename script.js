//your JS code here. If required.
function daysOfAYear(y){
	if(1<y<9999){
  if(y%400==0 || y%100 !=0 && y%4==0){
		return 366;
	}
	else{
		return 365;
	}
		
	}
	
}



 let year=prompt("Enter the year");
let x=daysOfAYear(year);
console.log(x);

