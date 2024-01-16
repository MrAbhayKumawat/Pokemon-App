import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PokemonDetails() {
  const [apiData, setApiData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${location.state}`
        );
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setApiData(null);
      }
    };
 
    fetchData();
  }, [location.state]);


  return (
    <>
      <div className="flex justify-center flex-wrap gap-5 mt-10">
        {apiData ? (
          <div
            className="w-72 h-auto bg-white border p-2 border-gray-200 rounded-lg"
            key={apiData.id}
          >
            <a href="" className="flex justify-center items-center bg-gray-200">
              <img
                className="h-48"
                src={apiData.sprites.other?.home.front_default}
                alt="PokeImg"
              />
            </a>
            <p className="text-xs p-1">{apiData.id}</p>
            <div className="p-2">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight">
                  {apiData.name}
                </h5>
              </a>
              <span>Height : </span><strong>{apiData.height}</strong><br/>
              <div><span>Weight : </span><strong>{apiData.weight}</strong></div>
              <div className="flex items-center gap-5">
                <div>Type:</div>
                <div className="p-1 w-24 border-2 text-center rounded-3xl bg-green-600 text-white">
                  {/* Replace with the actual type information */}
                  {apiData.types[0]?.type.name}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>No Data Found</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonDetails;
