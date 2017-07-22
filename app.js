$(document).ready(function() {
    function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
    $("button").click(function() {
        alert("กรุณารอสักครู่..");
        $.ajax({
            type: "GET",
            url: "https://iapi.bot.or.th/Stat/Stat-ReferenceRate/DAILY_REF_RATE_V1/?start_period=2017-07-10&end_period="+formatDate(Date()),
            beforeSend: function(xhr) { xhr.setRequestHeader('api-key', 'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm'); },
            success: function(result) {
                // $("#report_name_th").html(JSON.stringify(result.result.data.data_header.report_name_th));
                for (var i = 0; i < result.result.data.data_detail.length; i++) {
                    console.log(result.result.data.data_detail[i]);
                }
                $("#date").html('อัพเดทล่าสุดเมื่อ ' + result.result.data.data_detail[0].period);
                $("#money").html('1 TH = ' + result.result.data.data_detail[0].rate + 'US');
            },
            error: function(result) {}
        });
    });
});
