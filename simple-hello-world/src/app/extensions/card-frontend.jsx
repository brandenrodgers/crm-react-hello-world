import React, { useState } from "react";
import { Button, Card, Text, Stack, Form, Input } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

const HelloWorld = ({ context, runServerless, onAlertClick }) => {
  const [inputValue, setInputValue] = useState("");
  const executeServerless = async () => {
    try {
      const serverlessResponse = await runServerless({
        name: "get-data",
        payload: { inputValue },
      });
      const { context } = serverlessResponse.response;
      onAlertClick({ message: context.alertMessage });
    } catch (error) {
      console.error("Error executing serverless: ", error);
    }
  };

  return (
    <Card>
      <Stack>
        <Text
          format="markdown"
          text="🎉🎉 You are viewing your first UI extension using local dev server! Type your message to send to serverless function and get it back in alert! 🎉🎉 "
        />
        <Form onSubmit={executeServerless}>
          <Stack>
            <Input
              value={inputValue}
              label="Your text"
              placeholder="This text will be sent to serverless function"
              onChange={() => {}}
              onInput={(value) => setInputValue(value)}
            />
            <Button text="Send message" onClick={executeServerless} />
          </Stack>
        </Form>
      </Stack>
    </Card>
  );
};

hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <HelloWorld
    context={context}
    runServerless={runServerlessFunction}
    onAlertClick={actions.addAlert}
  />
));
