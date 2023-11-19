import { NavBar, Hero, Features, Community, Footer } from "./components";
function App() {
  return (
    <>
      <div className="bg-bgDark">
        <NavBar />
        <Hero />
      </div>
      <Features />
      <Community />
      <Footer />
    </>
  );
}

export default App;
