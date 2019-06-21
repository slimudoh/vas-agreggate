import { storiesOf } from "@storybook/react";
import { Notification, Button } from "../src/components";

import React from "react";

const onBubbleClick = type => {
  Notification.bubble({
    type,
    content: "Message here"
  });
};

storiesOf("Notifications", module)
  .add("default", () => (
    <Notification visible={true} setVisible={() => null}>
      default notification
    </Notification>
  ))
  .add("error", () => (
    <Notification visible={true} setVisible={() => null} type="error">
      error notification
    </Notification>
  ))
  .add("success", () => (
    <Notification visible={true} setVisible={() => null} type="success">
      success notification
    </Notification>
  ))
  .add("info", () => (
    <Notification visible={true} setVisible={() => null} type="info">
      info notification
    </Notification>
  ))
  .add("warning", () => (
    <Notification visible={true} setVisible={() => null} type="warning">
      warning notification
    </Notification>
  ))
  .add("bubble", () => (
    <React.Fragment>
      <Button onClick={() => onBubbleClick("warning")}>Warning</Button>
      <Button onClick={() => onBubbleClick("info")}>Info</Button>
      <Button onClick={() => onBubbleClick("error")} type="danger">
        Error
      </Button>
      <Button onClick={() => onBubbleClick("success")} type="success">
        Success
      </Button>
    </React.Fragment>
  ));
