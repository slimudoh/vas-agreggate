import React from "react";
import { storiesOf } from "@storybook/react";

import { TextAreaField } from "../src/components/common";

storiesOf("Textarea", module)
  .add("default textarea", () => <TextAreaField onChange={() => null} />)
  .add("textarea with placeholder", () => (
    <TextAreaField onChange={() => null} placeholder={"content here..."} />
  ))
  .add("textarea without placeholder", () => (
    <TextAreaField onChange={() => null} placeholder={""} />
  ))
  .add("textarea with error", () => (
    <TextAreaField onChange={() => null} error />
  ))
  .add("textarea with secondary", () => (
    <TextAreaField onChange={() => null} secondary />
  ));
