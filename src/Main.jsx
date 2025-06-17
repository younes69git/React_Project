import { useState  , useRef, useEffect } from "react";
import Ingredients from "./ingredient";
import ClaudeRecipe from "./ClaudeRecipe";
import {getRecipeFromMistral} from "./ai";
const Main = () => {
  // All state
  const [ingredients , setIntgredients] = useState([]);
  const [recipeShown , setRecipeShown] = useState(false);
  const [recipe , setRecipe] = useState(null)
  const [isPending , setIsPending] = useState(false)
  const recipeRef = useRef(null);


  // Return array of element included ingredients
  const ingredientsElements = ingredients.map((ingredient , index) => (
    <li key={index}>{ingredient}</li>
  )) 

  // Clear all of the ingredients
  function handleClick() {
    setIntgredients([])
    if(recipe !== null) {
      setRecipe(null)
    }
  }

  // Get recipe from Ai api
  async function getRecipe() {
    setIsPending(true);
    try {
      const result = await getRecipeFromMistral(ingredients);
      setRecipe(result);
      setRecipeShown(!recipeShown);
    } catch (err) {
      console.error("Error getting recipe:", err);
    } finally {
      setIsPending(false);
    }
  }

  // Add ingredient
  function addIngredients(formData) {
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const newIngredient = formData.get("ingredient");
    const data = Object.fromEntries(formData);
    if(data.ingredient !== "") {
      setIntgredients((prevIngredient) => [...prevIngredient, data.ingredient]);
    }
  }
  
  // useEffect for scroll down when the recipe there is
  useEffect(() => {
    if(recipeRef.current !== null && recipe !== null) {
      // recipeSection.current.scrollIntoView()
      const yCoord = recipeRef.current.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: yCoord,
        behavior: "smooth"
      })
    }
  },[recipe])
  return ( 
    <main className="home">
      <form action={addIngredients}>
        <input type="text" placeholder="Put the ingredient" name="ingredient"/>
        <button>+ Add Ingredient</button>
      </form>
      {ingredientsElements.length > 0 && <Ingredients 
        ingredientsElements = {ingredientsElements}
        handleClick={handleClick}
        getRecipe = {getRecipe}
        recipeShown={recipeShown}
        recipeRef = {recipeRef}
        />
      }
      {isPending && <h3>Loading...</h3>}
      {recipe && <ClaudeRecipe recipe = {recipe}/>}
    </main>
  );
  }
export default Main;