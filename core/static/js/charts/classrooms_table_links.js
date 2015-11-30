$(document).ready(function() {
    $(".subjectroom_performance_breakdown_link").click(function () {
        var subjectteacher_id = $(this).parent('div').find(".subjectteacher_id").text();
        if ($("#subjectroom_performance_breakdown_popup").length > 0) {
            $("#subjectroombar").html("");

            $.getJSON(CHART_ENDPOINT + "subjectteacher/" + subjectteacher_id, function (subjectteacher_data) {

                for (var i = 0; i < subjectteacher_data.length; i++) {
                    var subject_room = subjectteacher_data[i].subject_room;
                    $("#subjectroombar").append(
                        "<li class=subjectroomtab target=" + i + "><a title='View the performance of subjectroom: " + subject_room + "'>" + subject_room + "</a></li> ");
                    $("#subjectroombargraph").append(
                        "<div id='subjectroom_bargraph" + i + "' class='subjectroom_chart chart'></div>");
                }
                $("[target='0']").addClass('active');
                $('.subjectroom_chart').hide();
                $('#subjectroom_bargraph0').show();

                $('.subjectroomtab').click(function () {
                    $('.subjectroom_chart').hide();
                    $('#subjectroom_bargraph' + $(this).attr('target')).show();
                });

                $('ul.nav-tabs li a').click(function (e) {
                    $('ul.nav-tabs li.active').removeClass('active');
                    $(this).parent('li').addClass('active');
                });

                for (var i = 0; i < subjectteacher_data.length; i++) {
                    if (subjectteacher_data[i].listing.length == 0) {
                        $('#subjectroom_bargraph' + i).html(NO_DATA_IMG);
                        continue;
                    }

                    var subjectroom_performance_breakdown_data = [
                        ['Topic', 'Section Average', 'Standard Average']
                    ];
                    for (var j = 0; j < subjectteacher_data[i].listing.length; j++) {
                        var subjectroom_assignment = subjectteacher_data[i].listing[j];
                        subjectroom_performance_breakdown_data.push([subjectroom_assignment.topic, subjectroom_assignment.subjectroom_average, subjectroom_assignment.standard_average]);
                    }
                    draw_subjectroom_performance_breakdown(subjectroom_performance_breakdown_data, i, subjectteacher_data);
                }
            });
            $("#teacher_performance_breakdown_popup").modal('show');
        }
    });
});