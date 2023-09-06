let youtube = (masg)=>{
    let youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]+)/;
    var match = masg.match(youtubeRegex);
    return match;
};

$(document).ready(function () {
    $("#left").click(function () {
        let msg = $("#message").val();
        let check = msg.trim();
        let url = (youtube(msg));
        let iframeCheck = "";
        console.log(url);
        if(url!=null)
            iframeCheck = `<iframe src="https://www.youtube.com/embed/${url[1]}" ></iframe>`;
        if (check !== "") {
            $(".messages").append(`<div class="alL alert alert-primary col-4 offset-4"><div>${msg}</div>${iframeCheck}</div>`);
        }
        $("#message").val("");
    });
    $("#right").click(function () {
        let msg = $("#message").val();
        let check = msg.trim();
        let url = (youtube(msg));
        let iframeCheck = "";
        console.log(url);
        if(url!=null)
            iframeCheck = `<iframe src="https://www.youtube.com/embed/${url[1]}" ></iframe>`;
        if (check !== "") {
            $(".messages").append(`<div class="alR alert alert-info col-4 offset-4"><div>${msg}</div>${iframeCheck}</div>`);
        }
        $("#message").val("");
    });
});



