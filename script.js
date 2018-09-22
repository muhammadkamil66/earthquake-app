  $.ajax({
    url: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02`,
    success: function (data) {

      console.log(data);

      let mag = data.features[0].properties.mag;
      let tsunami = data.features[0].properties.tsunami;
      let sig = data.features[0].properties.sig;
      let nst = data.features[0].properties.nst;
      let dmin = data.features[0].properties.dmin;
      let rms = data.features[0].properties.rms;
      let gap = data.features[0].properties.gap;
      
      var ctx = document.getElementById("myPieChart");
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["mag", "tsunami","sig","nst","dmin","rms","gap"],
          datasets: [{
            label: '# of Votes',
            data: [mag,tsunami,sig,nst,dmin,rms,gap],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      });
       

    },
  })
