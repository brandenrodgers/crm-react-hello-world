exports.main = async (context = {}, sendResponse) => {
  // console.log({context});

  const { event } = context;

  // console.log(event);

  try {
    const data = {
      alertMesage:
        "Hello from serverless function! You typed: " +
        event.payload.inputValue,
    };
    sendResponse({ context: data });
  } catch (error) {
    sendResponse({
      context: { message: error.message },
    });
  }
};
