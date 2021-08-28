import React from "react";
import { Button } from "@material-ui/core";

//Компонент главной кнопки

const MainButton = ({ onMainButton, value }) => {
  return (
    <Button variant="contained" color="primary" onClick={onMainButton}>
      {value}
    </Button>
  );
};

export default MainButton;
