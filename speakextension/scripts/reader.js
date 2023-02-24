jQuery(function () { 
    let helperOn = false;

    // to turn on / off audio and highlight 
    $(document).on("keydown", function (event) {
        event.preventDefault();
        helperOn = event.key === ' '; // true if space, false if anything else.
        
        if (!helperOn) {
            $("*:not(body)").removeClass("highlight");
            speechSynthesis.cancel();
        }
    })

    $("*:not(body)").on("mouseenter", function (event) {
        if (!helperOn) return;

        event.stopPropagation();
        $(this).addClass("highlight");
        
        let text;

        if ($(this).is('img')) {
            const alttext = $(this).attr("alt");
            const srcofimg = $(this).attr("src");

            text = $(this).attr('alt') ? alttext : srcofimg;
        } else {
            text = $(this).text();
        }
        
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    })

    $("*:not(body)").on("mouseleave", function (event) {
        if (!helperOn) return;
        
        event.stopPropagation();
        $(this).removeClass("highlight");
        speechSynthesis.cancel();
    })
})