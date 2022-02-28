import { MenuItem, Select } from "@material-ui/core";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useState, useEffect, useRef } from "react";
import { useActions } from "../../hooks/useActions";
import { useTranslation } from "react-i18next";
import "./Filter.css"
export default function DoorWidthFunction() {
  

  // all states
  const [euroKey, setEuroKey] = useState<number>(2);
  const [doorWidth, setDoorWidth] = useState<number>(0);
  const [rampVal, setRampVal] = useState<number>(41);
  const [width,setWidth] = useState<number>(0);
  const isMounted = useRef(false);

  const { listPlacesFilter } = useActions();
  // TODO: Change this method
  useEffect(() => {
    if (isMounted.current) {
      listPlacesFilter({
        EuroKey: euroKey,
        DoorWidth: doorWidth,
        Ramp: rampVal 
      });
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line
  }, [euroKey, doorWidth, rampVal]);

  // For Euro Key
  function handleSelect(e) {
    setEuroKey(e.target.value);
    setWidth(50);
  }

  // For Door Width
  function handleSelectDoorWidth(f) {
    setDoorWidth(f.target.value);
    setWidth(50);
  }

  // For Ramp
  function handleRamp(g) {
    setRampVal(g.target.value);
    setWidth(50);
  }
  
  //For translation
  const {t} = useTranslation();
  
  return (
    <div className="overall">
      <div className="root">
        <Select
          className="selectButton"
          value={euroKey}
          onChange={(e) => handleSelect(e)}
          placeholder="Euro Key"
          IconComponent={KeyboardArrowUpOutlinedIcon}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
          disableUnderline
        >
          <MenuItem id="None" className="menuitem" value={2}>
            {t("EuroKey")}
          </MenuItem>
          <MenuItem id="EuroKeyYes" className="menuitem" value={1}>
            {t("Yes")}
          </MenuItem>
          <MenuItem id="EuroKeyNo" className="menuitem" value={0}>
            {t("No")}
          </MenuItem>
        </Select>
      </div>
      <div className="root">
        <Select
          className="selectButton"
          value={doorWidth}
          onChange={(f) => handleSelectDoorWidth(f)}
          IconComponent={KeyboardArrowUpOutlinedIcon}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
          id="DoorWidth"
          disableUnderline
        >
          <MenuItem value={0}>{t("DoorWidth")}</MenuItem>
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
        </Select>
      </div>
      <div className="root">
        <Select
          className="selectButton"
          id="Ramp"
          value={rampVal}
          onChange={g=>handleRamp(g)}
          IconComponent={KeyboardArrowUpOutlinedIcon}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
          disableUnderline
        >
          <MenuItem value={41}>
            {t("Ramp")}
          </MenuItem>
          <MenuItem value={0} className="menuitem">0%</MenuItem>
          <MenuItem value={1} className="menuitem">1%</MenuItem>
          <MenuItem value={2} className="menuitem">2%</MenuItem>
          <MenuItem value={3} className="menuitem">3%</MenuItem>
          <MenuItem value={4} className="menuitem">4%</MenuItem>
          <MenuItem value={5} className="menuitem">5%</MenuItem>
          <MenuItem value={6} className="menuitem">6%</MenuItem>
          <MenuItem value={7} className="menuitem">7%</MenuItem>
          <MenuItem value={8} className="menuitem">8%</MenuItem>
          <MenuItem value={9} className="menuitem">9%</MenuItem>
          <MenuItem value={10} className="menuitem">10%</MenuItem>
        </Select>
      </div>
    </div>
    // <>
    // <div className={classes.selectWrapper}>
    //   <select onChange={e=>handleSelect(e)} value={euroKey} className={classes.root}>
    //     <option value={2}>EuroKey</option>
    //     <option value={1}>Yes</option>
    //     <option value={0}>No</option>
    //   </select>
    //   <select  onChange={(f) => handleSelectDoorWidth(f)} value={doorWidth} className={classes.root}>
    //     <option value={0}>Door Width</option>
    //     <option value={80}>80CM</option>
    //     <option value={100}>100CM</option>
    //     <option value={120}>120CM</option>
    //     <option value={150}>150CM</option>
    //   </select>
    //   <select onChange={(g) => handleRamp(g)} value={rampVal} className={classes.root}>
    //     <option value={41}>Ramp</option>
    //     <option value={0}>0</option>
    //     <option value={10}>10</option>
    //     <option value={20}>20</option>
    //     <option value={30}>30</option>
    //     <option value={40}>40</option>
    //   </select>
    // </div>
    // </>
  );
}