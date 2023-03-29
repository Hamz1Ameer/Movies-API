import React, { useState, useEffect, useRef } from "react";
import "./App.css"; 
import alanBtn from "@alan-ai/alan-sdk-web";
// sdk key = 0c9ff9196bb03bb3e1ad66fbcde849fe2e956eca572e1d8b807a3e2338fdd0dc/stage

function useStateReference(value) {
  const ref = useRef(value);
  const [, forceRender] = useState(false);

  function updateState(newState) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceRender((s) => !s);
    }
  }

  return [ref, updateState];
}

function Alan() {
  const [count, setCount] = useStateReference({});
  useEffect(() => {
    alanBtn({
      key: "0c9ff9196bb03bb3e1ad66fbcde849fe2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: () => {
        console.info("Actual count value:", count.current);
      },
    });
  }, []);

  return <div className="App"></div>;
}
export default Alan;
