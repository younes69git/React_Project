const ingredients = ({ingredientsElements , handleClick ,getRecipe  , recipeRef}) => {
  return ( 
    <section>
      <ul>
      <h2>Igredients on hand:</h2>
        {ingredientsElements}
        <button onClick={handleClick}>Clear All</button>
      </ul>
      {
      ingredientsElements.length > 3 &&
      <div className="generate-recipe" ref={recipeRef}>
        <div>
          <h3>Ready for a recipe ?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={getRecipe}>Get a recipe</button>
      </div>
      }
    </section>
  );
}
export default ingredients