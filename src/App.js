import './App.css';
import { Provider } from "react-redux";
import appStore from './Utils/Redux/appStore';
import TodoWrapper from './Component/TodoWrapper';

function App() {
  return (
    <Provider store={appStore}>
      <TodoWrapper />
    </Provider>
  );
}

export default App;
