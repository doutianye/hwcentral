$(document).ready(function () {
    datatables_link_delegate(this, '.student_performance_breakdown_link', student_performance_breakdown_link_handler);
});

function student_performance_breakdown_link_handler(link) {
    var student_id = $(link).parent('td').parent('tr').find(".student_id").text();
    if ($("#student_performance_breakdown_popup_body").length > 0) {

        prep_chart_popup('student_performance_bargraph');
        $.getJSON(CHART_ENDPOINT + "student/" + student_id, function (student_data) {
            if ($("#student_performance_breakdown_popup_body").length > 0) {
                $("#subjectbar").html("<li id='all' class='active'><a title='View overall performance across all subjects'>Overall</a></li>");
                for (var i = 0; i < student_data.breakdown_listing.length; i++) {
                    var subject = student_data.breakdown_listing[i].subject;
                    $("#subjectbar").append(
                        "<li class=sub target=" + i + "><a title='View the student&#39;s performance in " + subject + "'>" + subject + "</a></li>");
                    $("#subject_performance").append(
                        "<div id='subject_performance" + i + "' class='popup_chart chart'></div>");
                }
                $('.popup_chart').hide();
                $('#student_performance_bargraph').show();

                $('#all').click(function () {
                    $('.popup_chart').hide();
                    $('#student_performance_bargraph').show();
                });

                $('.sub').click(function () {
                    $('.popup_chart').hide();
                    $('#subject_performance' + $(this).attr('target')).show();
                });


                $('ul.nav-tabs li a').click(function (e) {
                    $('ul.nav-tabs li.active').removeClass('active');
                    $(this).parent('li').addClass('active');
                });

                var subjectroomlist = student_data.breakdown_listing;
                for (var i = 0; i < subjectroomlist.length; i++) {
                    var student_performance_breakdown_data = [];
                    var assignmentlist = subjectroomlist[i].listing;
                    if (assignmentlist.length == 0) {
                        $('#subject_performance' + i).html(NO_DATA_IMG);
                        continue;
                    }

                    for (var j = 0; j < assignmentlist.length; j++) {
                        var student_assignment = assignmentlist[j];
                        student_performance_breakdown_data.push([
                            student_assignment.date,
                            student_assignment.student_score,
                            student_assignment.subjectroom_average,
                            student_assignment.topic,
                            student_assignment.student_completion
                        ]);
                    }
                    draw_student_performance_breakdown(student_performance_breakdown_data, i, student_data);
                }
            }

            if ($("#student_performance_report").length > 0) {
                var student_performance_report_data = [];
                var subjectlist = student_data.performance_report.listing;
                if (subjectlist.length == 0) {
                    $('#student_performance_bargraph').html(NO_DATA_IMG);
                }
                else {
                    for (var i = 0; i < subjectlist.length; i++) {
                        student_performance_report_data.push([
                            subjectlist[i].label,
                            subjectlist[i].student_average,
                            subjectlist[i].room_average
                        ]);
                    }
                    draw_student_performance_report(student_performance_report_data);
                }
            }
        });
        $("#student_performance_breakdown_popup").modal('show');
    }
}