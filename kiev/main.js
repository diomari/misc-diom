$( document ).ready(function() {
    // Initialize Countdown
    $('.countdown-area').countdown('2017/04/25', function(event) {
        $('.countdown-day').html(event.strftime('%D <span class="countdown-time">days</span>'));
        $('.countdown-hour').html(event.strftime('%H <span class="countdown-time">hours</span>'));
        $('.countdown-minute').html(event.strftime('%M <span class="countdown-time">minutes</span>'));
    });

    // Add hover effect on team list
    $('.team-image').hover(function() {
        $(this).find('.team-pic').toggle();
        $(this).find('.team-roster').toggle();
    })
});
