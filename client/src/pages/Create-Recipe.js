import { useState } from "react"

export const CreateRecipe = () => {

    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: [],
        instructions: '',
        imageUrl: '',
        cookingTime: 0,
        userOwner: 0
    });

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setRecipe({...recipe, [name]: value})
    }
    const handleIngredientChange = (event, idx) => {
        const {value} = event.target;
        const ingredients = [...recipe.ingredients];
        ingredients[idx] = value;
        setRecipe({...recipe, ingredients})
    }

    const addIngredient = () => {
        setRecipe({...recipe, ingredients: [...recipe.ingredients, '']})
    }

    return <div className="create-recipe">
        <h2>Create Recipe</h2>
        <form>
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" name="name" onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" onChange={handleChange}></textarea>

            <label htmlFor="ingredients">Ingredients</label>
            {recipe.ingredients.map((ingredients, idx) => (
                <input key={idx} type="text" name="ingredients" value={ingredients} onChange={(event) => handleIngredientChange(event, idx)}></input>
            ))}
            <button onClick={addIngredient}> Add Ingredient</button>

            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" onChange={handleChange}></textarea>

            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange}></input>

            <label htmlFor="cookingTime">Cooking Time (minutes)</label>
            <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange}></input>
        </form>
        </div>
}