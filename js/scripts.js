//=======================backend==================
function Contact (first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

//=======================frontend==================
$(function(){
  $("form#contactForm").submit(function(event){
    event.preventDefault();
    var first = $("input#first").val();
    var last = $("input#last").val();
    var newContact = new Contact(first,last);

    $("ul#output").append("<li><span class='contact'>" + newContact.fullName()+ "</span></li>");

    $('.contact').last().click(function() {
      $('.output').show();
      $('.output h1').text(newContact.firstName);
      $('.first').text(newContact.firstName);
      $('.last').text(newContact.lastName);
    });

    $("input#first").val('');
    $("input#last").val('');
  });
});
