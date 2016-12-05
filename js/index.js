var isClosed = false;
$(function() {
    $.ajax({
        url: 'closings.html',
        success: function(data) {
            $(data).find("tr").each(function() {
                var schoolName = this.innerText;
                console.log(schoolName);
                if (schoolName.indexOf('Marcellus') >= 0) {
                    if (schoolName.includes("Delayed")) {
                        console.log("Delayed");
                        var a = $('.isclosed').text("Delayed!");
                    } else {
                        isClosed = true;
                        console.log("Closed");
                        $('.isclosed').text("YES!");
                    }
                }

                if (schoolName.indexOf('Skaneateles') >= 0) {
                    console.log("wat");
                    $('.isskan').text("But Skan is like what the heck...");
                }
            });
            if (isClosed != true) {
                $('.isclosed').text("NOPE");
                $('.sub').text("You have to go to school.")
            }
        }
    });
});
