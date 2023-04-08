// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `)

};

/*
// David's random test example
  compiled: _.template(
    '<div class="message-box">' +
      '<div class="username">' +
        '<h2><%- username %></h2>' +
      '</div>' +
      '<p class="text">' +
        '<%- text %>' +
      '</p>' +
    '</div>'
  ),
*/

//Original Copy
// render: _.template(`
// <!--
// <div class="chat">
//   <div class="username"></div>
//   <div></div>
// </div>
// -->
// `)