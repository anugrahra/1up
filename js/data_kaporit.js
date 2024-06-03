const labelKaporit = ["Januari", "Februari", "Maret", "April", "Mei"];
const dataKaporit = [420, 405, 370, 305, 270];

// Rata-rata
const sumKaporit = dataKaporit.reduce((acc, val) => acc + val, 0);
const rataKaporit = sumKaporit / dataKaporit.length;

const dosisKaporit = (sumKaporit * 1000000) / (sumProduksi * 1000);

document.getElementById("sumKaporit").innerHTML = sumKaporit;
document.getElementById("rataKaporit").innerHTML = rataKaporit;
document.getElementById("dosisKaporit").innerHTML = dosisKaporit.toFixed(2);
