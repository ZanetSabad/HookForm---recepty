
import { TIngredient } from './TIngredient'


export type TRecipe = {
	recipeId?: string | undefined,
	titleRecipe?: string,
	ingredient?: TIngredient[],
	instruction?: string,    
	comment?: string,
}