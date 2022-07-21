import './App.css';
import Header from './components/Header';
import SlideShow from './components/Slideshow';
import Item from './components/Item';
import Counter from './components/Counter';

function App() {
  let products = [
    { id: '1', title: 'Product 1', price: '200$' },
    { id: '2', title: 'Product 2', price: '100$' },
    { id: '3', title: 'Product 3', price: '250$' },
    { id: '4', title: 'Product 4', price: '300$' },
    { id: '5', title: 'Product 5', price: '400$' },
    { id: '6', title: 'Product 6', price: '20$' },
  ];
  return (
    <>
      <Header />
      <SlideShow />
      <div className="container bg-light p-3 mt-3">
        <div className="row">
          {products.map((product) => {
            return <Item title={product.title} price={product.price} />;
          })}
        </div>
      </div>
      <Counter />
    </>
  );
}

export default App;
