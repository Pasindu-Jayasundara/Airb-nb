import "../public/css/App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  const data = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      title: "Card Title",
      description:
        "Card Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda ipsum nam temporibus animi corporis facilis fuga, ipsam a praesentium, aperiam accusantium nisi consequuntur placeat sequi sint quos explicabo vitae?",
    },
  ];
  
  return (
    <div className="container">
      <Navbar />
      <Hero />

      <Card cartData={data[0]}/> 
    </div>
  );
}

export default App;
