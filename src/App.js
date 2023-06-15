import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=a41adb992a20433f94d06b361ecaffb3`
    );
    const responseObj = await response.json();
    setData(responseObj.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {console.log(data)}
      {data.map((item, index) => (
        <div key={index}>
          {console.log(item)}
          <div>{item.title}</div>
          <div>
            <img src={item?.urlToImage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
