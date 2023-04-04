import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { SoundSection } from "./components/SoundSection";
import { DisplaySection } from "./components/DisplaySection";
import { WebGIViewer } from "./components/WebGIViewer";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebGIViewer />
    </div>
  );
}

export default App;
