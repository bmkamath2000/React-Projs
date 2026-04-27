import ContactForm from "./ContactForm.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <>
      <h1>Hello! (App)</h1>
      <NavBar link1="somelink1.html" link2="somelink2.html" link3="somelink3.html"/>
      <ContactForm />
    </>
  );
}

export default App;