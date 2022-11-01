import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className = "container text-danger d-flex gap-5 justify-content-center pt-5" >
      <Navbar/>
        <Cards title="London"
        src="https://th.bing.com/th/id/OIP.dQAEenFUfBlHdKpx7RMzDQHaE5?pid=ImgDet&rs=1"
        prag="One of the world's most visited cities, London is also known as the financial hub of the world with major banks headquartered in the cit"/>
        <Cards title="NewYork"
                src="https://th.bing.com/th/id/OIP.bjUhDDKF6GpGMxmotATGhAHaFD?pid=ImgDet&rs=1"
                prag="One of the world's most visited cities, London is also known as the financial hub of the world with major banks headqu"/>
        <Cards title="tokyo"
                src="https://www.fundcalibre.com/wp-content/uploads/2017/11/tokyo-street-EDITORIAL-shutterstock_302738093.jpg"
                prag="One of the world's most visited cities, London is also known as the financial hub of the world with major banks headqua"/>
         
   </div>
  );
}

export default App;
