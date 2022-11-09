
import { SpeciesProvider } from "./components/ContextDataSearch";
import { OverallResults } from "./components/OverallResults";
import SearchBar from "./components/SearchBar";
import './app.css'

function App() {
  return (
    <div className="wrapper">
      <div className="main-title">
        <h1>You have questions, we have answers.</h1>
        <h3>Search or browse our FAQS below.</h3>
      </div>
      <SpeciesProvider>
        <SearchBar />
        <OverallResults />
      </SpeciesProvider>
    </div>
  );
}

export default App;
