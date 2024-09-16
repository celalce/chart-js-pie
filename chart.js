let miktar = [75, 60, 45, 40, 39];
let markalar = ['BMW', 'Mercedes', 'ferrari','fiat' , 'Hyundai'];

let kanvas = document.getElementById('Demo');

let grafik = new Chart(kanvas, {
        type: 'bar',
        data: {
            labels: markalar,
            datasets: [{
                label: 'Heigth state',
                data: miktar,
              backgroundColor: [
 "rgba(37, 69, 209, 0.507)",
 "rgba(30, 219, 93, 0.507)",
 "rgba(238, 83, 22, 0.507)",
 "rgba(198, 238, 22, 0.507)",
 "rgba(153, 102, 255, 0.2)"
 ],
borderColor: [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)"
        ],
  borderWidth: 2
            }],

        }
});