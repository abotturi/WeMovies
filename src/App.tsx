import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import AllRoutes from "./routes";
import ProvidersContext from "./contexts/providers.context";

function App() {
  return (
    <ProvidersContext>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
      </BrowserRouter>
    </ProvidersContext>
  );
}

export default App;
