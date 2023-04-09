// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('form#room'),
  $select: $('#rooms select'),
  currentRoom: 'Lobby',

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // console.log('THIS IS THE ROOMS VIEW INITIALIZATION');
    // this.$select.attr('onchange', 'RoomsView.handleChange()');
    this.$select.on('change', function(event) {
      RoomsView.handleChange(event);
    });
    RoomsView.$button.on('submit', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    this.$select.empty();
    for (const key in Rooms._data) {
      if ( key === this.currentRoom ) {
        this.$select.append(`<option key='${key}' value="${key}" selected>${key}</option>`);
      } else {
        this.$select.append(`<option key='${key}' value="${key}">${key}</option>`);
      }
    }
  },

  renderRoom: function(roomname) {
    // console.log('testing renderRoom', roomname);
    // TODO: Render out a single room.
    if (!Rooms._data[roomname]) {
      Rooms._data[roomname] = true;
      this.currentRoom = roomname;
      RoomsView.render();
    }
    MessagesView.render(roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // console.log('HANDLED CHANGED');
    // console.log(event);
    this.currentRoom = event.target.value;
    this.renderRoom(event.target.value);
  },

  handleClick: function(event) {
    event.preventDefault();
    console.log('This is handleclick', event);
    // TODO: Handle the user clicking the "Add Room" button.
    let newRoomName = $('#addRoom').val();
    if (newRoomName.length > 0) {
      RoomsView.renderRoom(newRoomName);
    }
  }

};
