/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   26 April
 *
 * License: Public Domain
 **/

$.ajax({
    url: "https://xkcd.com/info.0.json",
    method: "GET",
    success: function(data){
        console.log(data);
        $("h3").html(data.title);
        $("#headshot").attr("src", data.img);
        $("#education").html(data.alt);
    }
})
