// The header row's date and clock, ticking like a Teletext page.
(function () {
    var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function two(n) { return (n < 10 ? '0' : '') + n; }
    function tick() {
        var d = new Date();
        var date = document.querySelector('.header .date');
        var clock = document.querySelector('.header .clock');
        if (date) date.textContent = DAYS[d.getDay()] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()];
        if (clock) clock.textContent = two(d.getHours()) + ':' + two(d.getMinutes()) + '/' + two(d.getSeconds());
    }
    tick();
    setInterval(tick, 1000);
}());
