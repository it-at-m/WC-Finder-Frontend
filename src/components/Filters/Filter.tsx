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
  }

  // For Door Width
  function handleSelectDoorWidth(f) {
    setDoorWidth(f.target.value);
  }

  // For Ramp
  function handleRamp(g) {
    setRampVal(g.target.value);
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
          <MenuItem value={0}>{t("Minimal Door Width")}</MenuItem>
          <MenuItem id="Door90cm" value={90} className="menuitem">
            min. 90cm
          </MenuItem>
          <MenuItem id="Door100cm" value={100} className="menuitem">
            min. 100cm
          </MenuItem>
          <MenuItem id="Door110cm" value={110} className="menuitem">
            min. 110cm
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
          <MenuItem value={0} className="menuitem">No Ramp (0 %)</MenuItem>
          <MenuItem value={6} className="menuitem">Accessible Ramp (1 - 6 %)</MenuItem>
          <MenuItem value={10} className="menuitem">Steep Ramps (&gt; 6%)</MenuItem>
        </Select>
      </div>
    </div>
  );
}