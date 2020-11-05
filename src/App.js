import React, {useState} from 'react'
import {Header, Footer, FoodItem, Search} from "./components"
import {useFetchFood} from "./useFetchFood"
import "./App.css"

const App = () => {
    const [query,setQuery] = useState("")
    const [search,setSearch] = useState('pizza')
    const {loading,error,food_data} = useFetchFood(search)


    const searchFood=()=>{
        setSearch(query)
        console.log("Query: " + query)
        setSearch(query)
        console.log("Search: " + search)
    }



              return (
        <div className='app'>
           <Header/>
           <Search searchFood={searchFood} query={query} setQuery={setQuery}/>
        {loading && "Loading"}
        {error && "Error"}
        {food_data &&
        <div className="foodContainer">
        {food_data.map((f,idx)=>(
            <FoodItem key={idx}
                      food={f}/>
        ))}
        </div>
        }
           <Footer/>
        </div>
    )
    
}

export default App
