//=======================backend==================
function Contact (first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
};

function Address (street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
};

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

Address.prototype.fullAddress = function () {
  return this.street + ', ' + this.city + ' ' + this.state;
};

function resetFields() {
  $("input#first").val('');
  $("input#last").val('');
  $("input#street").val('');
  $("input#city").val('');
  $("input#state").val('');
  var add = document.getElementsByClassName('address');
  for (var i = 1; i < add.length; i ++) {
    add[i].remove();
  };
}
//=======================frontend==================
$(function(){
  $('#add-address').click(function() {
    $('#addresses').append('<div class="address">' +
                              '<div class="form-group">' +
                                '<label for="#street">Street:</label>' +
                                '<input type="text" id="street">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="#city">City:</label>' +
                                '<input type="text" id="city">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="#state">State:</label>' +
                                '<input type="text" id="state">' +
                              '</div>' +
                            '</div>');
  });

  $("form#contactForm").submit(function(event) {
    event.preventDefault();
    var first = $("input#first").val();
    var last = $("input#last").val();
    var newContact = new Contact(first,last);

    $('.address').each(function() {
      var street = $(this).find("input#street").val();
      var city = $(this).find("input#city").val();
      var state = $(this).find("input#state").val();
      var newAddress = new Address(street, city, state);
      newContact.addresses.push(newAddress);
    });

    $("ul#output").append("<li><span class='contact'>" + newContact.fullName()+ "</span></li>");

    $('.contact').last().click(function() {
      $('.output').show();
      $('.output h1').text(newContact.firstName);
      $('.first').text(newContact.firstName);
      $('.last').text(newContact.lastName);
      $('ul#addresses').text('');
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append('<li>' + address.fullAddress() + '</li>');
      });
    });

    resetFields();
  });
});
