labelKaporit = ["Januari", "Februari"];
dataKaporit = [420, 405];

//rata-rata
let sumKaporit = 0;
for (let i = 0; i < dataKaporit.length; i++) {
  sumKaporit += dataKaporit[i];
}
const rataKaporit = sumKaporit / dataKaporit.length;

let dosisKaporit = (sumKaporit * 1000000) / (sumProduksi * 1000);

document.getElementById("sumKaporit").innerHTML = sumKaporit;
document.getElementById("rataKaporit").innerHTML = rataKaporit;
document.getElementById("dosisKaporit").innerHTML = dosisKaporit.toFixed(2);
