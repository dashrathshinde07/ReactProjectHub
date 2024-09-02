import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/CotactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import './App.css'

function App() {
  return (
    <>
      <div>




      
        <Navigation />
        <main className="main_container">
          <ContactHeader />
          <ContactForm />



          
        </main>
      </div>
    </>
  );
}

export default App;
