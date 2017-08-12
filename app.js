    function exchange(){
        var date = new Date();
        date.setDate(date.getDate());
        var dateString = date.toISOString().split('T')[0];

        var olddate = new Date();
        olddate.setDate(olddate.getDate() - 3 );
        var dateString_old = olddate.toISOString().split('T')[0];
        alert("กรุณารอสักครู่..");
        $.ajax({
            type: "GET",
            url: "https://iapi.bot.or.th/Stat/Stat-ReferenceRate/DAILY_REF_RATE_V1/?start_period="+dateString_old+"&end_period="+dateString,
            beforeSend: function(xhr) { xhr.setRequestHeader('api-key', 'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm'); },
            success: function(result) {
                for (var i = 0; i < result.result.data.data_detail.length; i++) {
                    console.log(result.result.data.data_detail[i]);
                }
                $("#date").html('อัพเดทล่าสุดเมื่อ'+result.result.data.data_detail[0].period );
                var rate = result.result.data.data_detail[0].rate;
                $("#money").html('1 THB = ' + rate + ' US');
                var money = $("#input_money").val();
                var ustoth = money*rate;
                $("#exchange").html(money+' US = '+ustoth+' TH');
            },
            error: function(result) {}
        });



    }

