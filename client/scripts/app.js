// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('data object', data);

      for (let i = 0; i < Object.keys(data).length; i++) {
        let message = data[i];
        if (message.text.includes('</script>')) {
          continue;
        }
        Messages._data[i] = message; // store the message object inside the Messages database/model
        let room = message.roomname;
        if (!Rooms._data[room]) {
          Rooms._data[room] = true;
        }
      }

      MessagesView.render();
      RoomsView.render();

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};
