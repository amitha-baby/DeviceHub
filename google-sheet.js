var $form = $('#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwV1-gniw-hdYVaziDPMYUziQfIxMn8CeKhzdFV6xo0Dyi6B2Q/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  }).success(
    // do something
  );
})