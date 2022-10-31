import Gallery from "@pages/Gallery";
import UploadPicture from "@pages/UploadPicture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <UploadPicture />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
