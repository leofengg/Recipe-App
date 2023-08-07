import { useEffect, useState } from "react"
import axios from 'axios'
import { useGetUserID } from "../hooks/useGetUserID"


export const SavedRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userID = useGetUserID();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get('http://localhost:5000/recipes');
                setRecipes(response.data);
            } catch (err) {
                console.error(err)
            }
        }

        const fetchSavedRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/recipes/savedRecipes/ids/${userID}`);
                setSavedRecipes(response.data.savedRecipes)
                console.log(response.data.saveRecipe)
            } catch (err) {
                console.error(err)
            }
        }


        fetchSavedRecipe();

    }, [])


    const saveRecipe =  async (recipeID) =>  {
        try {

            const response = await axios.put('http://localhost:5000/recipes', {recipeID, userID});
            setSavedRecipes(response.data.savedRecipes)
        } catch (err) {
            console.error(err)
        }
    }

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return <div>
        <h1>Recipes</h1>
        
    </div> 
}