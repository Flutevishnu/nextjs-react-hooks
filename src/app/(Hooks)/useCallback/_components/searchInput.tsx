'use client'
import { useState, useCallback } from "react";

export default function SearchComponent() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<string[]>([]);
    
    const fetchData = useCallback(async (searchTerm: string):Promise<void> => {
        console.log(`Fetching data for: ${searchTerm}`);
        const fakeResults = ["Laptop", "Computer", "Mouse", "Television", "Telephone"].filter((res) =>
            res.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setResults(fakeResults)
    }, [])
    
    const debounce = useCallback(
        (fn: (arg: string) => void, delay: number): (arg: string) => void => {
          let timer: NodeJS.Timeout;
          return (arg: string) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(arg), delay);
          };
        },
        []
      );

    const handleInputchange = debounce((inputValue: string) => {
        setQuery(inputValue);
        if (inputValue.trim() !== "") {
        fetchData(inputValue); 
        } else {
        setResults([]);
        }
    }, 500)
    return(
        <div className="flex flex-col  gap-2  items-center">
            <h1>Search Input</h1>
            <input type="text"
            placeholder="Type to search"
            className="text-black"
            onChange={(e) => {handleInputchange(e.target.value)}}
            />
            <div>
                <h3>Results:</h3>
                <ul>
                    {results.map((val, idx) => (
                        <li key={idx} >{val}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}