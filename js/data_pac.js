labelPac = ["Januari", "Februari"];
dataPac = [2950, 3900];

//rata-rata
let sumPac = 0;
for (let i = 0; i < dataPac.length; i++) {
  sumPac += dataPac[i];
}
const rataPac = sumPac / dataPac.length;

let dosisPac = (sumPac * 1000000) / (sumProduksi * 1000);

document.getElementById("sumPac").innerHTML = sumPac;
document.getElementById("rataPac").innerHTML = rataPac;
document.getElementById("dosisPac").innerHTML = dosisPac.toFixed(2);
