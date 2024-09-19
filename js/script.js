// Update
const updateData = "1 September 2024";
document.getElementById("updateData").innerHTML = updateData;
document.getElementById("updateDataMobile").innerHTML = updateData;

 // Inisialisasi chart
 let produksiChart = null;
 let koagulanChart = null;
 let disinfektanChart = null;

 // Fungsi untuk menghancurkan chart jika ada
 function destroyChartsIfExist() {
     if (produksiChart) {
         produksiChart.destroy();
         produksiChart = null;
     }
     if (koagulanChart) {
         koagulanChart.destroy();
         koagulanChart = null;
     }
     if (disinfektanChart) {
         disinfektanChart.destroy();
         disinfektanChart = null;
     }
 }

 // Fungsi untuk membuat chart
 function createChart(elementId, labels, data, label, borderColor, backgroundColor) {
     const ctx = document.getElementById(elementId).getContext("2d");
     return new Chart(ctx, {
         type: "bar",
         data: {
             labels: labels,
             datasets: [
                 {
                     label: label,
                     data: data,
                     borderColor: borderColor,
                     backgroundColor: backgroundColor,
                     borderWidth: 3,
                 },
             ],
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true,
                 },
             },
         },
     });
 }

 // Inisialisasi chart pertama kali
 produksiChart = createChart(
     "produksiHome",
     labelProduksi,
     dataProduksi,
     "Produksi Air Minum (m3)",
     undefined,
     undefined
 );

 koagulanChart = createChart(
     "koagulanHome",
     labelPac,
     dataPac,
     "PAC (kg)",
     "#FFA500",
     "rgba(255,165,0,0.5)"
 );

 disinfektanChart = createChart(
     "disinfektanHome",
     labelKaporit,
     dataKaporit,
     "Kaporit (kg)",
     "#E5E4E2",
     "rgba(229,228,226,0.5)"
 );

 // Fungsi untuk memperbarui chart berdasarkan rentang yang dipilih
 document.getElementById("submitButton").addEventListener("click", function() {
     const dariBulan = parseInt(document.getElementById("daribulan").value) - 1;  // Indeks awal
     const sampaiBulan = parseInt(document.getElementById("sampaibulan").value) - 1;  // Indeks akhir
     const tahun = document.getElementById("tahun").value;  // Ambil tahun yang dipilih

     // Validasi input
     if (isNaN(dariBulan) || isNaN(sampaiBulan) || dariBulan < 0 || sampaiBulan < 0 || dariBulan > sampaiBulan) {
         myPopup.show();
         return;
     }

     // Potong data dan label berdasarkan rentang yang dipilih
     const newLabels = labelProduksi.slice(dariBulan, sampaiBulan + 1).map(label => label + " " + tahun);
     const newDataProduksi = dataProduksi.slice(dariBulan, sampaiBulan + 1);
     const newDataPac = dataPac.slice(dariBulan, sampaiBulan + 1);
     const newDataKaporit = dataKaporit.slice(dariBulan, sampaiBulan + 1);

     // Hancurkan chart lama jika ada
     destroyChartsIfExist();

     // Buat ulang chart dengan data baru
     produksiChart = createChart(
         "produksiHome",
         newLabels,
         newDataProduksi,
         "Produksi Air Minum (m3) " + tahun,
         undefined,
         undefined
     );

     koagulanChart = createChart(
         "koagulanHome",
         newLabels,
         newDataPac,
         "PAC (kg) " + tahun,
         "#FFA500",
         "rgba(255,165,0,0.5)"
     );

     disinfektanChart = createChart(
         "disinfektanHome",
         newLabels,
         newDataKaporit,
         "Kaporit (kg) " + tahun,
         "#E5E4E2",
         "rgba(229,228,226,0.5)"
     );

     // Hitung total dan rata-rata untuk data yang telah difilter
     const sumProduksi = newDataProduksi.reduce((acc, val) => acc + val, 0);
     const rataProduksi = sumProduksi / newDataProduksi.length;
     const sumJumlahHari = jumlahHari.slice(dariBulan, sampaiBulan + 1).reduce((acc, val) => acc + val, 0);
     const kapasitasDimanfaatkan = sumProduksi / sumJumlahHari / 24 / 3.6;
     const sumWaktuOperasi = waktuOperasi.slice(dariBulan, sampaiBulan + 1).reduce((acc, val) => acc + val, 0);
     const rataWaktuOperasi = sumWaktuOperasi / sumJumlahHari;

     const sumPac = newDataPac.reduce((acc, val) => acc + val, 0);
     const rataPac = sumPac / newDataPac.length;
     const dosisPac = (sumPac * 1000000) / (sumProduksi * 1000);

     const sumKaporit = newDataKaporit.reduce((acc, val) => acc + val, 0);
     const rataKaporit = sumKaporit / newDataKaporit.length;
     const dosisKaporit = (sumKaporit * 1000000) / (sumProduksi * 1000);

     // Perbarui elemen HTML dengan hasil perhitungan terbaru
     document.getElementById("kapasitasDimanfaatkan").innerHTML = kapasitasDimanfaatkan.toFixed(2);
     document.getElementById("rataWaktuOperasi").innerHTML = rataWaktuOperasi.toFixed(2);
     document.getElementById("sumProduksi").innerHTML = sumProduksi;
     document.getElementById("rataProduksi").innerHTML = rataProduksi.toFixed(2);
     document.getElementById("sumPac").innerHTML = sumPac;
     document.getElementById("rataPac").innerHTML = rataPac.toFixed(2);
     document.getElementById("dosisPac").innerHTML = dosisPac.toFixed(2);
     document.getElementById("sumKaporit").innerHTML = sumKaporit;
     document.getElementById("rataKaporit").innerHTML = rataKaporit.toFixed(2);
     document.getElementById("dosisKaporit").innerHTML = dosisKaporit.toFixed(2);
 });