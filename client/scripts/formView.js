// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form#send'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    let message = {
      username: App.username,
      text: $('#message').val(),
      roomname: RoomsView.currentRoom
    };

    Parse.create(message, function() {

      let newMessage = MessageView.render(message);
      App.startSpinner();
      App.fetch(function() {
        App.stopSpinner();
        MessagesView.render(RoomsView.currentRoom);
      });
    });

    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};