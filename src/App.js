import "./styles.css";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function App() {
  const [value, setValue] = useState(1);
  const [change, setChange] = useState(false);

  const onMainButton = evt => {
    evt.preventDefault();
    setChange(true);
  };

  const onChangeButtons = evt => {
    evt.preventDefault();
    setChange(false);
    setValue(evt.target.textContent);
  };

  return (
    <div className="App">
      {change
        ? <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={onChangeButtons}
            >
              1
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={onChangeButtons}
            >
              2
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onChangeButtons}
            >
              3
            </Button>
          </div>
        : <Button variant="contained" color="primary" onClick={onMainButton}>
            {value}
          </Button>}
    </div>
  );
}
