import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AviaInfo } from "./pages/AviaInfo/AviaInfo";
import { AviaSearch } from "./pages/AviaSearch/AviaSearch";
import { Main } from "./pages/Main";

function App() {
  const [inputValue, setInputValue] = useState<string[]>(["", "", ""]);
  const [reverce, setReverce] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/avia"
          element={
            <AviaSearch
              inputValue={inputValue}
              setInputValue={setInputValue}
              reverce={reverce}
              setReverce={setReverce}
            />
          }
        />
        <Route
          path="/avia/info"
          element={<AviaInfo inputValue={inputValue} reverce={reverce} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
