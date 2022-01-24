import { MenuItem, TextField,Select } from "@material-ui/core";
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
        <Select
          className={classes.root}
          value={euroKey}
          onChange={(e) => handleSelect(e)}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Euro Key"
          disableUnderline
        >
          <MenuItem id="None" value={2}>
            EuroKey
          </MenuItem>
          <MenuItem id="EuroKeyYes" className="menuitem" value={1}>
            Yes
          </MenuItem>
          <MenuItem id="EuroKeyNo" className="menuitem" value={0}>
            No
          </MenuItem>
        </Select>
      </div>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          value={doorWidth}
          onChange={(f) => handleSelectDoorWidth(f)}
          id="DoorWidth"
          InputProps={{ disableUnderline: true }}
          select
        >
          <MenuItem disabled value={0}>Door Width</MenuItem>
          <MenuItem id="Door80cm" value={80} className="menuitem">
            80cm
          </MenuItem>
          <MenuItem id="Door100cm" value={100} className="menuitem">
            100cm
          </MenuItem>
          <MenuItem id="Door120cm" value={120} className="menuitem">
            120cm
          </MenuItem>
          <MenuItem id="Door150cm" value={150} className="menuitem">
            150cm
          </MenuItem>
          </TextField>
        {/* </TextField> */}
      </div>
      <div className={classes.selectWrapper}>
        <TextField
          className={classes.root}
          id="Ramp"
          value={rampVal}
          onChange={g=>handleRamp(g)}
          InputProps={{ disableUnderline: true }}
          select
        >
          <MenuItem disabled value={41}>
            Ramp
          </MenuItem>
          <MenuItem value={0} className="menuitem">0</MenuItem>
          <MenuItem value={10} className="menuitem">10</MenuItem>
          <MenuItem value={20} className="menuitem">20</MenuItem>
          <MenuItem value={30} className="menuitem">30</MenuItem>
          <MenuItem value={40} className="menuitem">40</MenuItem>
        </TextField>
      </div>
      <div className={classes.selectWrapper}>
        <Button className={classes.root}>
          Filters
        </Button>
      </div>
      <div className={classes.selectWrapper}>
        <Button onClick={clearAll} className={classes.root}>
          Clear
        </Button>
      </div>
    </div>
    
  );
}

