$(document).ready(function () { 
    $("*:not(body)").hover(
        function (ev) {
            // when hover
            $(this).addClass("highlight");
            const text = $(this).text();
            speechSynthesis.speak(new SpeechSynthesisUtterance(text)); 
            ev.stopPropagation();
        },
        function (ev) {
            // when exit
            $(this).removeClass("highlight");
            speechSynthesis.cancel();
            ev.stopPropagation(); 
        }
    )
})

// $(document).keydown(function (e) {
//     if (e.code == '' || e.code == 'Unidentified' || e.code == 'Space') {
//         const text = $(this).text();
//         speechSynthesis.speak(new SpeechSynthesisUtterance(text)); 
//     } else {
//         speechSynthesis.cancel();
//     }
// });