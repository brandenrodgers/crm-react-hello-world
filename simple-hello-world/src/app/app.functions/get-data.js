exports.main = async (context = {}, sendResponse) => {
  // console.log({context});

  const { event } = context;

  // console.log(event);

  try {
    const data = {
      alertMessage:
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
