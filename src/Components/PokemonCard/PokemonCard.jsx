import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [filterquary, setFilterquary] = useState("");
  const [Inputquarry, SetInputquarry] = useState("");
  const navigate = useNavigate();
  // Move the function declaration to the top
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    SearchFilterData();
  };

  const filterCardData = () => {
    if (filterquary.toLowerCase() === "reset") {
      setFilteredData(props.data.slice(0, 300));
    } else {
      // eslint-disable-next-line react/prop-types
      const filteredArray = props.data
        .slice(0, 300)
        .filter(
          (item) => item.types[0]?.type.name === filterquary.toLowerCase()
        );
      setFilteredData(filteredArray);
    }
  };

  function SearchFilterData() {
    // eslint-disable-next-line react/prop-types
    const filterdta = props.data
      .slice(0, 300)
      .filter(
        (items) => items.name.toLowerCase() === Inputquarry.toLowerCase()
      );
    setFilteredData(filterdta);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    filterCardData();
  }, [filterquary]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const initialData = props.data.slice(0, 300);
    setFilteredData(initialData);
    // eslint-disable-next-line react/prop-types
  }, [props.data]);

  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center gap-y-10 justify-around mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyfimZSNNvExPzLJAU433OjYAZXx92pteqaQc7UvIkOEMaDVzzA7JO8BvRQAhzXCB7m0T8q3AvL-5C9d40Ws9n3HKPyE5wrLwjkniKbvcbenzPMuqZXlyETeuIkuDBM9jKo3qi4k_MwW8xnrpcV89-geUVeYWo8JB7AiYO-701RV7RG_n_NNsw3o13mIpL/s320/image-removebg-preview.png"
              className="lg:h-14 xl:h-13 h-24"
              alt="Flowbite Logo"
            />
          </a>
          <div>
            <form className="lg:w-96 w-72" onSubmit={handleSearchSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={Inputquarry}
                  className="block w-full p-4 ps-10 text-sm text-black border "
                  placeholder="Search Pokemon..."
                  onChange={(e) => SetInputquarry(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <hr />

      <div className="">
        <div className="text-2xl tracking-widest p-5">Filter by types:</div>
        <div className="flex flex-wrap justify-start lg:gap-5 items-center px-10">
          {/* ... (other filter options) */}
          <div className="grid lg:grid-cols-10 xl:grid-cols-10 md:grid-cols-5 sm:grid-cols-3 grid-cols-3  lg:gap-5 xl:gap-5 md:gap-5 sm:gap-5 gap-2.5">
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-gray-300 text-black cursor-pointer"
              onClick={() => setFilterquary("Normal")}
            >
              Normal
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-green-600 text-white cursor-pointer"
              onClick={() => setFilterquary("Grass")}
            >
              Grass
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-orange-600 text-white cursor-pointer"
              onClick={() => setFilterquary("Fire")}
            >
              Fire
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-sky-600 text-white cursor-pointer"
              onClick={() => setFilterquary("Water")}
            >
              Water
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-green-900 text-white cursor-pointer"
              onClick={() => setFilterquary("Bug")}
            >
              Bug
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-yellow-500 text-white cursor-pointer"
              onClick={() => setFilterquary("Electric")}
            >
              Electric
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-yellow-800 text-white cursor-pointer"
              onClick={() => setFilterquary("Rock")}
            >
              Rock
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-purple-700 text-white cursor-pointer"
              onClick={() => setFilterquary("Ghost")}
            >
              Ghost
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-purple-400 text-white cursor-pointer"
              onClick={() => setFilterquary("Poison")}
            >
              Poison
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-pink-400 text-white cursor-pointer"
              onClick={() => setFilterquary("Psychic")}
            >
              Psychic
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-orange-800 text-white cursor-pointer"
              onClick={() => setFilterquary("Fighting")}
            >
              Fighting
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-yellow-900 text-white cursor-pointer"
              onClick={() => setFilterquary("Ground")}
            >
              Ground
            </div>
            <div
              className="p-2 px-6 border 2 rounded-3xl bg-red-400 text-white cursor-pointer"
              onClick={() => setFilterquary("Dragon")}
            >
              Dragon
            </div>

            <div
              className="p-2 px-6 border 2 rounded-3xl bg-black text-white cursor-pointer"
              onClick={() => setFilterquary("Reset")}
            >
              Reset
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-5 mt-10">
        {filteredData.length > 0 ? (
          filteredData.map((items, index) => (
            <div
              className="w-72 h-auto bg-white border p-2 border-gray-200 rounded-lg"
              key={index}
            >
              <a
                href=""
                className="flex justify-center items-center bg-gray-200"
              >
                <img
                  className="h-48"
                  src={items.sprites.other?.home.front_default}
                  alt=""
                  onClick={() =>
                    navigate("/PokemonDetails", { state: items.id })
                  }
                />
              </a>
              <p className="text-xs p-1">{items.id}</p>
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight">
                    {items.name}
                  </h5>
                </a>
                <div className="flex items-center gap-5">
                  <div>Type:</div>
                  <div className="p-1 w-24 border-2 text-center rounded-3xl bg-green-600 text-white">
                    {items.types[0]?.type.name}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
           <div className="w-12 h-12 relative animate-spin border-t-4 border-blue-500 border-solid rounded-full">
      <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full absolute top-0 right-0 animate-spin-988"></div>
      <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full absolute bottom-0 left-0 animate-spin-988"></div>
      <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full absolute top-0 left-0 animate-spin-988"></div>
    </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonCard;
