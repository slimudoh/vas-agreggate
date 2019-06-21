import React from "react";
import { storiesOf } from "@storybook/react";

import { Award, CheckCirle, Dashboard, Wallet, Gear, Group, Upload, Add, DownLoad, Eye, File, Level, Logout } from "../src/components/common/customIcon";

storiesOf("Custom Icons", module)
  .add("basic", () => <div>
      <Award size={"30px"} />
      <CheckCirle size={"30px"} />
      <Dashboard size={"30px"} />
      <Wallet size={"30px"} />
      <Gear size={"30px"} />
      <Group size={"30px"} />
      <Upload size={"30px"} />
      <Add size={"30px"} />
      <DownLoad size={"30px"} />
      <Eye size={"30px"} />
      <File size={"30px"} />
      <Level size={"30px"} />
      <Logout size={"30px"} />
  </div>);

