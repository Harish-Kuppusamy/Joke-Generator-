import usejoke from "./jokeStore";

function App() {
  const { joke, category, setCategory, fetchjoke } = usejoke();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Chuck Norris Joke Generator
        </h1>

        <input
          type="text"
          placeholder="Enter category (e.g., animal, career)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          onClick={fetchjoke}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition mb-6 w-full"
        >
          Get Joke
        </button>

        <p className="text-lg text-gray-700">{joke}</p>
      </div>
    </div>
  );
}

export default App;
