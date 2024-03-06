import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
