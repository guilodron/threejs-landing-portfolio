import CoisasThree from "./components/CoisasThree";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import {CursorProvider} from "./providers/useCursor";
import {ThemeProviderReact} from './providers/useTheme';
import {GlobalStyles} from './globalStyles'

function App() {

  return (
    <CursorProvider>
      <ThemeProviderReact>
        <GlobalStyles />
        <Header />
        <Landing />
        <CoisasThree />
      </ThemeProviderReact>
    </CursorProvider>
  );
}

export default App;
