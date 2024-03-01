import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        children="Click Me!"
        onClick={() => setAlertVisibility(true)}
        color="dark"
      ></Button>
    </div>
  );
};

export default App;
