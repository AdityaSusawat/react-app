import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>This is my alert</Alert>
      )}
      <Button
        colour="primary"
        onClick={() => {
          if (alertVisible == false) setAlertVisible(true);
          else setAlertVisible(false);
        }}
      >
        My button
      </Button>
    </>
  );
}

export default App;
