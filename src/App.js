import "./App.css";
import FormsSection from "./components/FormsSection";
import ResultsSection from "./components/ResultsSection";

function App() {
  return (
    <div className="min-h-screen lg:flex ">
      <FormsSection />
      <div className="border-l border-gray-300"></div>{" "}
      {/* Vertical dividing line */}
      <ResultsSection />
    </div>
  );
}

export default App;
