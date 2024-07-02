const labelPac = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
const dataPac = [2950, 3900, 4100, 3450, 2950, 2700];

// Rata-rata
const sumPac = dataPac.reduce((acc, val) => acc + val, 0);
const rataPac = sumPac / dataPac.length;

const dosisPac = (sumPac * 1000000) / (sumProduksi * 1000);

document.getElementById("sumPac").innerHTML = sumPac;
document.getElementById("rataPac").innerHTML = rataPac;
document.getElementById("dosisPac").innerHTML = dosisPac.toFixed(2);
