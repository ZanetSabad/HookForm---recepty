
import { TIngredient } from "./TIngredient";


export type TRecipe = {
    recipeId?: string | undefined,
    titleRecipe?: string,
    weight?: string,
    ingredient?: TIngredient[],
    instruction?: string,    
    comment?: string,
}