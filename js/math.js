const formatNumber = (num) => num.toLocaleString('id-ID',  {maximumFractionDigits: 2 });

// rata-rata jumlah produksi
const sumProduksi = dataProduksiTahun[currentYear].dataProduksi.reduce((acc, val) => acc + val, 0);
const rataProduksi = sumProduksi / dataProduksiTahun[currentYear].dataProduksi.length;

// kapasitas dimanfaatkan
const sumJumlahHari = dataProduksiTahun[currentYear].jumlahHari.reduce((acc, val) => acc + val, 0);
const kapasitasDimanfaatkan = sumProduksi / sumJumlahHari / 24 / 3.6;
const produksiPerHari = sumProduksi / sumJumlahHari;

// waktu operasi
const sumWaktuOperasi = dataProduksiTahun[currentYear].waktuOperasi.reduce((acc, val) => acc + val, 0);
const rataWaktuOperasi = sumWaktuOperasi / sumJumlahHari;

document.getElementById("kapasitasDimanfaatkan").innerHTML =
formatNumber(kapasitasDimanfaatkan);
document.getElementById("rataWaktuOperasi").innerHTML =
formatNumber(rataWaktuOperasi);
document.getElementById("sumProduksi").innerHTML = formatNumber(sumProduksi);
document.getElementById("produksiPerHari").innerHTML = formatNumber(produksiPerHari);
document.getElementById("rataProduksi").innerHTML = formatNumber(rataProduksi);

// Rata-rata pac
const sumPac = dataPacTahun[currentYear].dataPac.reduce((acc, val) => acc + val, 0);
const rataPac = sumPac / dataPacTahun[currentYear].dataPac.length;
const pacPerHari = sumPac / sumJumlahHari;

const dosisPac = (sumPac * 1000000) / (sumProduksi * 1000);

document.getElementById("sumPac").innerHTML = formatNumber(sumPac);
document.getElementById("rataPac").innerHTML = formatNumber(rataPac);
document.getElementById("pacPerHari").innerHTML = formatNumber(pacPerHari);
document.getElementById("dosisPac").innerHTML = formatNumber(dosisPac);

// Rata-rata kaporit
const sumKaporit = dataKaporitTahun[currentYear].dataKaporit.reduce((acc, val) => acc + val, 0);
const rataKaporit = sumKaporit / dataKaporitTahun[currentYear].dataKaporit.length;
const kaporitPerHari = sumKaporit / sumJumlahHari;

const dosisKaporit = (sumKaporit * 1000000) / (sumProduksi * 1000);

document.getElementById("sumKaporit").innerHTML = formatNumber(sumKaporit);
document.getElementById("rataKaporit").innerHTML = formatNumber(rataKaporit);
document.getElementById("kaporitPerHari").innerHTML = formatNumber(kaporitPerHari);
document.getElementById("dosisKaporit").innerHTML = formatNumber(dosisKaporit);

console.log(currentYear)