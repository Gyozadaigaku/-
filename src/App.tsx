import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { SoundSection } from "./components/SoundSection";
import { DisplaySection } from "./components/DisplaySection";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
    </div>
  );
}

export default App;
