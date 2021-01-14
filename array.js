var buah = "";
for(var i=0; i<buah.length; i++){
    console.log(buah[i]);
    buah = buah + "<li>" + buah[i] +"</li>";
}
console.log(buah);
document.getElementById("buah").innerHTML = buah;