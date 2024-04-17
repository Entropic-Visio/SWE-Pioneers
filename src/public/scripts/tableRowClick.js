$(document).ready(function() {
    $('.active-row').click(function() {
      var url = $(this).data('url');
      window.location.href = url;
    });
});