import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "components";
import MainRoutes from "pages/Routes";
import "App.scss";
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
