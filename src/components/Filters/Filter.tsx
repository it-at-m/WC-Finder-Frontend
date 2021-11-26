import { MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import { useActions } from "../../hooks/useActions";
import style from "./style";

export default function DoorWidthFunction() {
  
  // For styling
  const classes = style();

  // all states
  const [euroKey, setEuroKey] = useState<number>(2);
  const [doorWidth, setDoorWidth] = useState<number>(0);
  const [rampVal, setRampVal] = useState<number>(41);
  const isMounted = useRef(false);

  const { listPlacesFilter } = useActions();
  // TODO: Change this method
  useEffect(() => {
    if (isMounted.current) {
      listPlacesFilter({
        EuroKey: euroKey,
        DoorWidth: doorWidth,
        Ramp: rampVal,
      });
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line
  }, [euroKey, doorWidth, rampVal]);

  // For Euro Key
  function handleSelect(e) {
    setEuroKey(e.target.value);
  }

  // For Door Width
  function handleSelectDoorWidth(f) {
    setDoorWidth(f.target.value);
  }

  // For Ramp
  function handleRamp(g) {
    setRampVal(g.target.value);
  }

  // For Clear Functionality
  const clearAll = () => {
    setEuroKey(2);
    setDoorWidth(0);
    setRampVal(41);
  };

  return (
    <div className={classes.all}>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          label="Eurokey"
          value={euroKey}
          onChange={(e) => handleSelect(e)}
          id="EuroKey"
          placeholder="Euro Key"
          InputProps={{ disableUnderline: true }}
          select
        >
          <MenuItem id="None" value={2}></MenuItem>
          <MenuItem id="EuroKeyYes" value={1}>
            Yes
          </MenuItem>
          <MenuItem id="EuroKeyNo" value={0}>
            No
          </MenuItem>
        </TextField>
      </div>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          value={doorWidth}
          onChange={(f) => handleSelectDoorWidth(f)}
          label="Door width"
          id="DoorWidth"
          InputProps={{ disableUnderline: true }}
          select
        >
          <MenuItem id="NoneDoor" value={0}></MenuItem>
          <MenuItem id="Door80cm" value={80}>
            80cm
          </MenuItem>
          <MenuItem id="Door100cm" value={100}>
            100cm
          </MenuItem>
          <MenuItem id="Door120cm" value={120}>
            120cm
          </MenuItem>
          <MenuItem id="Door150cm" value={150}>
            150cm
          </MenuItem>
        </TextField>
      </div>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          id="Ramp"
          value={rampVal}
          onChange={handleRamp}
          label="Ramp"
          InputProps={{ disableUnderline: true }}
          select
        >
          <MenuItem value={41}></MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={0}>0</MenuItem>
        </TextField>
      </div>
      {/* <div className={classes.selectWrapper}>
        <Button className={classes.selectBox}>More filters</Button>
      </div> */}
      <div className={classes.selectWrapper}>
        <Button className={classes.selectBox} onClick={clearAll}>
          Clear
        </Button>
      </div>
    </div>
  );
}
