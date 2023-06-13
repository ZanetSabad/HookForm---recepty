import React, {FC} from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

type InputRecipesProps = {
    label: string
    name: string
}

const InputRecipes: FC<InputRecipesProps> = ({label, name}: InputRecipesProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

  return (
    <TextField
      label={label}
      variant='outlined'
      error={Boolean(errors["name"]?.message)}
      helperText={errors[name]?.message?.toString()}
      fullWidth
      id="outlined-error"
      {...register(name)}
    />
  )
}

export default InputRecipes
