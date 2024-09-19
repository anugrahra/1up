// rata-rata jumlah produksi
const sumProduksi = dataProduksi.reduce((acc, val) => acc + val, 0);
const rataProduksi = sumProduksi / dataProduksi.length;

// kapasitas dimanfaatkan
const sumJumlahHari = jumlahHari.reduce((acc, val) => acc + val, 0);
const kapasitasDimanfaatkan = sumProduksi / sumJumlahHari / 24 / 3.6;

// waktu operasi
const sumWaktuOperasi = waktuOperasi.reduce((acc, val) => acc + val, 0);
const rataWaktuOperasi = sumWaktuOperasi / sumJumlahHari;

document.getElementById("kapasitasDimanfaatkan").innerHTML =
  kapasitasDimanfaatkan.toFixed(2);
document.getElementById("rataWaktuOperasi").innerHTML =
  rataWaktuOperasi.toFixed(2);
document.getElementById("sumProduksi").innerHTML = sumProduksi;
document.getElementById("rataProduksi").innerHTML = rataProduksi.toFixed(2);

// Rata-rata pac
const sumPac = dataPac.reduce((acc, val) => acc + val, 0);
const rataPac = sumPac / dataPac.length;

const dosisPac = (sumPac * 1000000) / (sumProduksi * 1000);

document.getElementById("sumPac").innerHTML = sumPac;
document.getElementById("rataPac").innerHTML = rataPac.toFixed(2);
document.getElementById("dosisPac").innerHTML = dosisPac.toFixed(2);

// Rata-rata kaporit
const sumKaporit = dataKaporit.reduce((acc, val) => acc + val, 0);
const rataKaporit = sumKaporit / dataKaporit.length;

const dosisKaporit = (sumKaporit * 1000000) / (sumProduksi * 1000);

document.getElementById("sumKaporit").innerHTML = sumKaporit;
document.getElementById("rataKaporit").innerHTML = rataKaporit.toFixed(2);
document.getElementById("dosisKaporit").innerHTML = dosisKaporit.toFixed(2);
