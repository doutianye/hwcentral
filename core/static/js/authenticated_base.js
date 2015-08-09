var DATATABLES_DEBUG=false;
var CHART_ENDPOINT="http://localhost:8000/chart/";
var MIN_DIMENSION=600;
if (screen.width<=MIN_DIMENSION || screen.height<=MIN_DIMENSION){
    alert ("Sorry ! HWCentral does not support this device. To ensure an optimal experience, try logging in from a non-mobile device");
    window.stop();
}

$(document).ready(function () {
    $(function(){
       $(".date_picker").pickadate({

            format: 'dd/mm/yyyy',
            monthSelector: false,
            yearSelector: false,
            onStart: function(){
                this.set('select',Date.now())
            },
            min: Date.now(),
        });
        $(".time_picker").pickatime({

            format: 'HH:i',
            disable: [
                true,
                [20,0],
            ],
            interval: 240,

            
        });
    });
    $(document).tooltip();
    $('#announcement_table').dataTable({
        "pagingType":"full_numbers"
    });
    $('#active_assignment_table').dataTable();
    $('#graded_assignment_table').dataTable();
    $('#teacher_listing').dataTable();
    $(function(){
        $("#menu").accordion();
    });
})
