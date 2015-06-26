function draw_performance_breakdown(arraydata,tab_index,subject,subject_teacher) {
        
            var data = google.visualization.arrayToDataTable(arraydata);

            var options = {
                title: ""+subject+": "+subject_teacher,
                legend: {
                    position: 'right'
                },
                pointSize:5,
                width: 1100,
                height: 500,
                hAxis: {
                    title: 'Topic',
                },
                vAxis: {
                    title: 'Aggregate',
                    viewWindowMode: 'Explicit',
                    viewWindow: {
                        max: 100,
                    }
                }
            };


            var chart = new google.visualization.LineChart(document.getElementById('linegraph' + tab_index));

            chart.draw(data, options);
        }