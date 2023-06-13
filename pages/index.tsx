import { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { ObjectSchema, string, object, array } from 'yup'
import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

import InputRecipes from '@/components/InputRecipes'
import IngredientArray from '@/components/IngredientArray'
import InputInstructions from '@/components/InputInstructions'
import InputComments from '@/components/InputComments'
import { TIngredient } from '../src/lib/types/TIngredient'
import { TRecipe } from '../src/lib/types/TRecipe'


const ingredientsSchema: ObjectSchema<TIngredient> = object({
  ingredientId: string().optional(),
  ingredient: string().optional()
})

const recipeSchema: ObjectSchema<TRecipe> = object({
  recipeId: string().optional(),
  titleRecipe: string().required('Musí být vyplněno'),
  weight: string().required('Musíš vybrat jednu z možností'),
  ingredient: array().of(ingredientsSchema).optional(),
  instruction: string().optional(), 
  comment: string().optional(),
})


const App: FC = () => {
  const methods = useForm<TRecipe>({
    resolver: yupResolver(recipeSchema)
  })
  
  const SubmitRecipes: SubmitHandler<TRecipe> =  async (data: TRecipe) => {
    // console.log('data submitted', data);
  }

  console.log('titleRecipe: ', methods.watch('titleRecipe'));
  console.log('weight: ', methods.watch('weight'));  
  // console.log('ingredient: ', methods.watch('ingredient'));
  console.log('instruction: ', methods.watch('instruction'));  
  console.log('comment: ', methods.watch('comment'));
  
  return(
    <Grid container justifyContent={"center"} >
      <Grid container minWidth={"700px"} minHeight={"95vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{backgroundColor: "#F2D4C2"}}> 
       <Typography variant='h2' color="#0D050C">Recepty</Typography>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(SubmitRecipes)} >
          <Grid container width={"500px"} rowSpacing={-5}>
            <InputRecipes label="Název" name="titleRecipe"/>
          </Grid>
          <Grid container width={"500px"}  rowSpacing={-5}>
            <IngredientArray />
          </Grid>
          <Grid container width={"500px"} rowSpacing={-5}>
            <InputInstructions label="Postup" message="instruction"/>
          </Grid>
          <Grid container width={"500px"} rowSpacing={-5}>
            <InputComments label="Poznámky" message="comment"/>
          </Grid>
          <Grid>
            <Button type="submit" variant='contained' color='primary'>
              Uložit
            </Button>
          </Grid>
        </form>
      </FormProvider>
      </Grid>
    </Grid>
   
  )
}

export default App
