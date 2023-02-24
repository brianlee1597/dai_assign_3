jQuery(function () { 
    let prev, curr;

    $(document).on('mousemove', function (e) {
        curr = e.target;
    })

    $("*:not(body)").on("keydown", function (e) {
        e.preventDefault();

        if (e.key !== ' ') {
            $(curr).removeClass("highlight");
            (prev == curr) && speechSynthesis.cancel();
            return;
        }
    
        if (prev) {
            $(prev).removeClass("highlight");
            speechSynthesis.cancel();
        }

        let text;

        if ($(curr).is('img')) {
            const alttext = $(curr).attr("alt");
            const srcofimg = $(curr).attr("src");

            text = $(curr).attr('alt') ? alttext : srcofimg;
        } else {
            text = $(curr).text();
        }

        $(curr).addClass("highlight");
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech); 

        prev = curr;
    })
})