import { useState } from "react";
import { AddCategory, GifGrid } from "./components/pages";
import { AppRouter } from "./router/AppRouter";
export const GifExpertApp = () => {

const [ categories, setCategories ] = useState([]);



const onAddCategory = ( newCategory ) => {
    // console.log(newCategory)

    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ])
}
  return (

    <>

    <AppRouter/>
   

        <h1>Busca tus gifs!</h1>
       <AddCategory 
            onNewCategory = { onAddCategory }
       />       
          {
          categories.map( ( category )  => 
                (

                  <GifGrid key={ category } category={ category }/>
                )
            )
          }
    </>
  )
}
