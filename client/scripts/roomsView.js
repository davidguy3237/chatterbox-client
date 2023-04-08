// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    console.log('THIS IS THE ROOMS VIEW INITIALIZATION');
    // this.$select.attr('onchange', 'RoomsView.handleChange()');
    this.$select.on('change', function(event) {
      RoomsView.handleChange(event);
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (const key in Rooms._data) {
      this.$select.append(`<option key='${key}' value="${key}">${key}</option>`);
    }
  },

  renderRoom: function(roomname) {
    console.log('testing renderRoom', roomname);
    // TODO: Render out a single room.
    MessagesView.render(roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('HANDLED CHANGED');
    console.log(event);
    this.renderRoom(event.target.value);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
