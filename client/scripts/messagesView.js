// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // console.log('THIS IS THE MESSAGES VIEW INITIALIZATION');
    // if ( roomsView.currentRoom === 'test' ) {
    //   this.render();
    // } else {
    //   this.render(roomsView.currentRoom);
    // }
    // $('body').on('click', () => console.log('hello'));
    // $('body').on('click', () => {
    //   console.log(event.target.value);
    // });
  },

  render: function(roomname) {
    // TODO: Render _all_ the messages.
    this.$chats.html('');

    if (!roomname) {
      for (const key in Messages._data) {
        let messageObj = Messages._data[key];
        let message = this.renderMessage(messageObj);
        this.$chats.append(message);
      }
    } else if (roomname) {
      // this.$chats.empty();
      for (const key in Messages._data) {
        let messageObj = Messages._data[key];
        if (messageObj.roomname === roomname) {
          this.renderMessage(messageObj);
        }
      }
    }

    $('.username').on('click', () => {
      Friends.toggleStatus(event.target.innerText);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // {
    //   "message_id": 87937,
    //   "roomname": "lobby",
    //   "text": "asdgasadfhaeh",
    //   "username": "asdfsa",
    //   "github_handle": "msong1",
    //   "campus": "rfp",
    //   "created_at": "2023-02-25T19:57:06.666Z",
    //   "updated_at": "2023-02-25T19:57:06.666Z"
    // }

    let messageRenderer = _.template(
      '<div class="message-box">' +
        '<div class="username-section">' +
          '<h2 class="username"><%- username %></h2>' +
        '</div>' +
        '<p class="text">' +
          '<%- text %>' +
        '</p>' +
      '</div>'
    );
    this.$chats.append(messageRenderer(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};