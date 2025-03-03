import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ColorListType, ConnectorListType } from "./type";
import { useEffect, useState } from "react";

function App() {
  const [connectorList, setConnectorList] = useState<ConnectorListType | null>(
    null
  );
  const [colorList, setColorList] = useState<ColorListType | null>(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/connector")
      .then((res) => res.json())
      .then((data) => setConnectorList(data))
      .catch((err) => console.log(err));
    fetch("http://localhost:3000/api/color")
      .then((res) => res.json())
      .then((data) => setColorList(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {connectorList !== null && colorList !== null ? (
        <>
          <Autocomplete
            id="connector"
            options={connectorList}
            getOptionLabel={(option) => option.label}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Connector" variant="outlined" />
            )}
          />
          <Autocomplete
            id="color"
            options={colorList}
            getOptionLabel={(option) => option.label}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Color" variant="outlined" />
            )}
          />
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

export default App;
