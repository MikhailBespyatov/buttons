import React from "react";
import { Button } from "@material-ui/core";

//Компонент выбора value

const ChangeButtons = ({ onChangeButtons }) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
        onClick={() => {
          onChangeButtons(1);
        }}
      >
        1
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
        onClick={() => {
          onChangeButtons(2);
        }}
      >
        2
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          onChangeButtons(3);
        }}
      >
        3
      </Button>
    </div>
  );
};

export default ChangeButtons;
