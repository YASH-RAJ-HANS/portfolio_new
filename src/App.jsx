import Header from "./components/Header/Header";
import css from './styles/app.modules.scss'
const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    {/* hear css.container points towards app.module.scss */}
    <Header/>
  </div>
};

export default App;
