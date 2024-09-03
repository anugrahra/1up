// Update
const updateData = "1 September 2024";
document.getElementById("updateData").innerHTML = updateData;
document.getElementById("updateDataMobile").innerHTML = updateData;

// Fungsi untuk membuat grafik
function createChart(
  elementId,
  labels,
  data,
  label,
  borderColor,
  backgroundColor
) {
  const ctx = document.getElementById(elementId).getContext("2d");
  new Chart(ctx, {
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

// Produksi
createChart(
  "produksiHome",
  labelProduksi,
  dataProduksi,
  "Produksi Air Minum (m3)",
  undefined,
  undefined
);

// Koagulan - PAC
createChart(
  "koagulanHome",
  labelPac,
  dataPac,
  "PAC (kg)",
  "#FFA500",
  "rgba(255,165,0,0.5)"
);

// Disinfektan - Kaporit
createChart(
  "disinfektanHome",
  labelKaporit,
  dataKaporit,
  "Kaporit (kg)",
  "#E5E4E2",
  "rgba(229,228,226,0.5)"
);
