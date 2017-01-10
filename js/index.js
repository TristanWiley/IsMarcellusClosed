var isClosed = false;
var breakOverride = false;
    $.ajax({
        url: 'http://cnycentral.com/resources/ftptransfer/wstm/closings/closings.htm',
        success: function(data) {
            $(data).find("tr").each(function() {
                var schoolName = this.innerText;
                console.log(schoolName);
                if (schoolName.indexOf('Marcellus') >= 0) {
                    if (schoolName.includes("Delayed")) {
                        console.log("Delayed");
                        isClosed = true;
                        $('.isclosed').text("Delayed!");
                    } else if(schoolName.includes("after-school") || schoolName.includes("after school")){
                        console.log("No after school activities");
                        isClosed = false;
                        $("#after-school").text("No after school activities");
                    } else {
                        isClosed = true;
                        console.log("Closed");
                        $('.isclosed').text("YES!");
                    }
                }

                if (schoolName.indexOf('Skaneateles') >= 0 && !schoolName.includes("after-school")) {
                    console.log("wat");
                    $('.isskan').text("But Skan is like what the heck...");
                }
            });
            if (isClosed != true) {
                $('.isclosed').text("NOPE");
                $('.sub').text("You have to go to school.")
            }
            if (breakOverride == true){
                $('.isclosed').text("BREAK");                
            }
        }
    });
