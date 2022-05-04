let p = 48;
let h = 1.64;
let IMC = p/(h*h);
console.log (IMC);
if (IMC< 18.5){
console.log ("SEU MAGRELO");
}else if (IMC<22){ 
console.log ("PRECISA ENGORDAR");
}else if (IMC<27) {
console.log ("PESO NORMAL");
}else if (IMC<31){
console.log ("ESTA GORDINHO(A)");
}else{
console.log("OBSEO(A)");
};
