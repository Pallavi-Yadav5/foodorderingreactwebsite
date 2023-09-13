import Delievery from "./Components/Delievery";
import Featured from "./Components/Featured";
import TopNav from "./Components/TopNav";
import TopPicks from "./Components/TopPicks";
import Meal from "./Components/Meal";
import Categories from "./Components/Categories";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
       <TopNav />
       <Featured />
       <Delievery />
       <TopPicks />
       <Meal />
       <Categories />
       <NewsLetter/>
       <Footer />
    </div>
  );
}
export default App;
