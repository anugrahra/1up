labelProduksi = ["Januari", "Februari"];
dataProduksi = [139606, 141034];

//rata-rata
let sumProduksi = 0;
for (let i = 0; i < dataProduksi.length; i++) {
  sumProduksi += dataProduksi[i];
}
const rataProduksi = sumProduksi / dataProduksi.length;

document.getElementById("sumProduksi").innerHTML = sumProduksi;
document.getElementById("rataProduksi").innerHTML = rataProduksi;
