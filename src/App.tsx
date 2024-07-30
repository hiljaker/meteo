import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import RoutesProvider from "./providers/RoutesProvider";
import MUIThemeProvider from "./providers/MUIThemeProvider";

const App = () => {
  return (
    <MUIThemeProvider>
      <TanstackQueryProvider>
        <RoutesProvider />
      </TanstackQueryProvider>
    </MUIThemeProvider>
  );
};

export default App;
