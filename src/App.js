
import Price from "./components/Price";
import './App.css';
import Product from './Product';
import Image from './components/Image';
import Name from './components/Name';
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
       <Image imageUrl={Product.imageUrl} />
          <Name name={Product.name} />
          <Price price={Product.price} />
          <Description description={Product.description} />
          <Image image={Product.image}/>
      <Image/>
    </div>
  );
}

export default App;
