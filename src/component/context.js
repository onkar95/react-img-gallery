import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [Data, setData] = useState([])
    const [singleData, setSingleData] = useState()
    const [searchVal, setSearchVal] = useState("")
    const [popup, setpopup] = useState(false)
    const [theme, setTheme] = useState(false)

    const REACT_APP_UNSPLASH_ACCESS_KEY = "iZpEeBkTPWjd8xGVMmUfwgC7tUcqOS83YsXELNx0VHg"
    const REACT_APP_UNSPLASH_SECRET_KEY = "6X3YhuHrM9_MLuXEbssasPByQfbSXFcWZfEBYbPg5Kc"

    useEffect(() => {
        if (searchVal !== "") {
            axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    client_id: REACT_APP_UNSPLASH_ACCESS_KEY,
                    per_page: 9, // the number of photos to retrieve per page,
                    query: searchVal,
                    page: 1 // the page number of the results
                }
            })
                .then((d) => {
                    console.log(d.data)
                    setData(d.data.results)
                })
                .catch((err) => console.log(err))
        }
    }, [searchVal])

    useEffect(() => {
        console.log(Data)
        if (Data.length === 0) {
            axios.get('https://api.unsplash.com/photos', {
                params: {
                    client_id: REACT_APP_UNSPLASH_ACCESS_KEY,
                    per_page: 9,
                    page: 1
                }
            })
                .then((d) => {
                    console.log(d.data)
                    setData(d.data)
                })
                .catch((err) => console.log(err))
        }
    }, [])

    return (
        <DataContext.Provider value={{
            Data, setData,
            singleData, setSingleData,
            searchVal, setSearchVal,
            popup, setpopup,
            theme, setTheme
        }}>
            {children}
        </DataContext.Provider >
    )
}

export default DataContext;