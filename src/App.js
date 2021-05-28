import "./App.css";
import AddTransection from "./component/AddTransection";
import Balance from "./component/Balance";
import Header from "./component/Header";
import IncomeExpense from "./component/IncomeExpense";
import TransectionList from "./component/TransectionList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransectionList />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}
export default App;
