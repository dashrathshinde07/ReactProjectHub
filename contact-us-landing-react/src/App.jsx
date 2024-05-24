import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/CotactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";



function App() {
  return (
    <>
      <div>
        <Navigation/>
        <ContactHeader/>
        <ContactForm/>
      </div>
    </>
  );
}

export default App;
