function kalkulasi(){
    var a = parseInt(document.getElementById("a1").value);
    var b = parseInt(document.getElementById("a2").value);

    document.getElementById("hasil").value = tambah(a,b);
}


function tambah (a, b){

    return a+b;
}