import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
function App() {
  const [products, setProduct] = useState([]);
  const [productView, setProductView] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
      } catch (error) {}
    };
    getProducts();
  }, []);

  function updaterow() {
    setProductView((prev) => !prev);
  }

  console.log(products);

  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"end",padding:20}}>
        <div>
          <button onClick={updaterow}>
            <MenuIcon />
          </button>
        </div>
        <div>
          <button onClick={updaterow}>
            <WidgetsIcon />
          </button>
        </div>
      </div>

      {productView ? (
        <>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                {products.map((val, i) => {
                  return (
                    <div class="p-4 md:w-1/3">
                      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={val.thumbnail}
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {val.brand}
                          </h2>
                          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                            {val.title}
                          </h1>
                          <p class="leading-relaxed mb-3">{val.description}</p>
                      
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section class="text-gray-600 body-font">
            {products.map((value, i) => {
              return (
                <>
                  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{height:300,padding:10}}>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={value.thumbnail}
                      />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      {value.title}
                      </h1>
                      <p class="mb-8 leading-relaxed">
                      {value.description}
                      </p>
                      <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Button
                        </button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
