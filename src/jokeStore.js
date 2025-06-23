import { create } from "zustand";
import axios from "axios";

const usejoke = create((set,get) => ({
    joke: "",
    category: "",
    setCategory: (value) => set(() => ({ category: value })),
    setJoke: (value) => set(() => ({ joke: value })),
    fetchjoke: async () => {
        try {
          const res = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${get().category}`
          );
          set(() => ({ joke: res.data.value }));
        } catch (err) {
          console.log(err);
          set(() => ({ joke: "Error fetching joke" }));
        }
    }
    
}))

export default usejoke