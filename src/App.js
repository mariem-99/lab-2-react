import './App.css';
import Counter from "./components/Counter";
import PersonForm from "./components/PersonForm";
import ShoppingList from "./components/ShoppingList";
import AppSettings from "./components/AppSettings";
import ClickTracker from "./components/ClickTracker";
import Calculator from "./components/Calculator";
import TextEcho from "./components/TextEcho";
import SignupForm from "./components/SignupForm";
import SignupFormWithValidation from "./components/SignupFormWithValidation";
import PreferencesForm from "./components/PreferencesForm";
import Thermostat from "./components/Thermostat";
import FruitBasket from "./components/FruitBasket";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 2</h1>
      <hr /><h2>1.1 Counter</h2><Counter />
      <hr /><h2>1.2 Person Form</h2><PersonForm />
      <hr /><h2>1.3 Shopping List</h2><ShoppingList />
      <hr /><h2>1.4 App Settings</h2><AppSettings />
      <hr /><h2>2.1 Click Tracker</h2><ClickTracker />
      <hr /><h2>2.2 Calculator</h2><Calculator />
      <hr /><h2>2.3 Text Echo</h2><TextEcho />
      <hr /><h2>3.1 Signup Form</h2><SignupForm />
      <hr /><h2>3.2 Validation</h2><SignupFormWithValidation />
      <hr /><h2>3.3 Preferences</h2><PreferencesForm />
      <hr /><h2>4.1 Thermostat</h2><Thermostat />
      <hr /><h2>4.2 Fruit Basket</h2><FruitBasket />
    </div>
  );
}

export default App;