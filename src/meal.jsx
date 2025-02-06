import axios from "axios";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Import spinner
import "./style.css";

function Meal() {
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setitems(res.data.meals);
        setLoading(false); // Stop loading after data fetch
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#ffcc00" size={80} />
        </div>
      ) : (
        <div className="items-container">
          {items.map(({ strMeal, strMealThumb, idMeal }) => (
            <section className="card" key={idMeal}>
              <img src={strMealThumb} alt={strMeal} />
              <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
              </section>
            </section>
          ))}
        </div>
      )}

      {/* Fixed Footer */}
      <footer className="footer">
        <p className="credit">⚡ Akshay Kocharekar</p>
      </footer>
    </>
  );
}

export default Meal;
