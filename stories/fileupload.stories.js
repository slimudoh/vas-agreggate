import React from "react";

import { storiesOf } from "@storybook/react";
import { Upload } from "../src/components/common";

let files = [
  {
    id: "15",
    image:
      "https://artisan-shell.s3.amazonaws.com/media/sand-home-decorators-collection-texture-carpet-hde3840100-64_1000_BqxI5cv.jpg"
  },
  {
    id: "16",
    image:
      "https://artisan-shell.s3.amazonaws.com/media/cd25f45af3b21211d3e51e5f082bf102.png"
  },
  {
    id: "17",
    image: "https://artisan-shell.s3.amazonaws.com/media/imageSign.jpg"
  },
  {
    id: "18",
    image:
      "https://artisan-shell.s3.amazonaws.com/media/19-197489_hammer-clip-art-at-clker-com-vector-clip-art-online-cartoon-picture_KDXS2dd.png"
  },
  {
    id: "19",
    image:
      "https://artisan-shell.s3.amazonaws.com/media/cd25f45af3b21211d3e51e5f082bf102_f0CLOoC.png"
  }
];

storiesOf("File Upload", module)
  .add("default upload", () => <Upload />)
  .add("default single upload", () => <Upload single />)
  .add("with files", () => (
    <div>
      <Upload files={files} />
    </div>
  ))
  .add("with preview", () => (
    <div>
      <Upload files={files} previewFunc={src => alert(src)} />
    </div>
  ));
