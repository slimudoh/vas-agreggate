import React from "react";
import { storiesOf } from "@storybook/react";

import {
  Input,
  Select,
  TextAreaField,
  FormGroup
} from "../src/components/common";

storiesOf("Form group", module)
  .add("default form group with input", () => (
    <FormGroup title={"title"}>
      <Input />
    </FormGroup>
  ))
  .add("default form group with select", () => (
    <FormGroup title={"title"}>
      <Select>
        <Select.Option>Hello</Select.Option>
        <Select.Option>Hello</Select.Option>
        <Select.Option>Hello</Select.Option>
      </Select>
    </FormGroup>
  ))
  .add("default form group with input", () => (
    <FormGroup title={"title"}>
      <TextAreaField />
    </FormGroup>
  ));
