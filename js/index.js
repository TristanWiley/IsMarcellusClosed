var isClosed = false;
$.ajax({
    url: 'closings.html',
    success: function(data) {
        $(data).find("tr").each(function() {
            var schoolName = this.innerText;
            console.log(schoolName);
            // if (schoolName.indexOf('Marcellus') >= 0) {
            //     isClosed = true;
            //     $('.isclosed').text("YES!");
            // }

            // if (schoolName.indexOf('Skaneateles') >= 0) {
            //     console.log("wat");
            //     $('.isskan').text("But Skan is like what the heck...");
            // }
        });
        if (isClosed != true) {
            $('.isclosed').text("NOPE");
            $('.sub').text("You have to go to school.")
        }
    }
});
