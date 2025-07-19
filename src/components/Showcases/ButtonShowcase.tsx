/** @format */

import React from "react";
import Button from "../atoms/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonShowcase = () => (
  <div className="flex flex-row gap-4 ">
    <div className="flex flex-col gap-2">
      <p>Solid button:</p>
      <Button variant="solid">Default solid</Button>
    </div>
    <div className="flex flex-col gap-2">
      <p>Pressed button:</p>
      <Button size="md" variant="outline">
        Outline
      </Button>
    </div>
    <div className="flex flex-col gap-2">
      <p>Disabled button:</p>
      <Button disabled>Disabled Button</Button>
    </div>
    <div className="flex flex-col gap-2">
      <p>Hovered button:</p>
      <Button variant="Hovered">Hovered Button</Button>
    </div>
    <div className="flex flex-col gap-2">
      <p>Loading button:</p>
      <Button size="sm" variant="outline" loading>
        loading Outline
      </Button>
    </div>
    <div className="flex flex-col gap-2">
      <p>Button with icon:</p>
      <Button
        icon={<ArrowForwardIcon className="h-4 w-4" />}
        iconPosition="left"
      >
        With Icon
      </Button>
    </div>
  </div>
);

export default ButtonShowcase;
