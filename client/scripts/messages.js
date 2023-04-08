// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


//This API has two endpoints available to you:

// GET https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus
// POST https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus

/*
data seems to be an object containing message objects (look at console)
message format:
{
  campus: "rfp",
  created_at: "2023-02-25T19:57:06.666Z",
  github_handle: "msong1",
  message_id: 87937,
  roomname: "lobby",
  text: "asdgasadfhaeh",
  updated_at: "2023-02-25T19:57:06.666Z",
  username: "asdfsa"
}

*/

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
};