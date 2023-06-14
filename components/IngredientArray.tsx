import React, { FC } from 'react'
import { Button, Grid, IconButton, TextField } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { TRecipe } from '../src/lib/types/TRecipe'


const IngredientsForm: FC = () => {

	const { control, watch } = useFormContext<TRecipe>()
	const { fields, append, remove } = useFieldArray<TRecipe, 'ingredient', 'ingredientId'>(
		{
			control,
			name: 'ingredient',
			keyName: 'ingredientId',
		}
	)

	console.log('ingredients are', watch('ingredient'))

	return (
		<>
			<Grid container direction="row">
				{fields.map((article, index) => (
					<Grid container item xs={12} key={article.ingredientId}>
						<Grid item>
							<Controller
								name={`ingredient.${index}.ingredient`}
								control={control}
								defaultValue={article.ingredient}
								render={({ field }) => <TextField {...field} />}
							/>
						</Grid>
						<Grid item>
							<IconButton
								onClick={() => {
									remove(index)
								}}
							>
								<RemoveIcon />
							</IconButton>
						</Grid>
					</Grid>
				))}
				<Grid item xs={12}>
					<Button
						type="button"
						variant="contained"
						color="secondary"
						onClick={() => {
							append({ ingredientId: fields.length.toString(), ingredient: '' })
						}}
					>
						Add Ingredient
					</Button>
				</Grid>
			</Grid>
		</>
	)
}

export default IngredientsForm
