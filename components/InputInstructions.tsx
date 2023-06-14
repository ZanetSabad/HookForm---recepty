import { TextField } from '@mui/material'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type InputInstructionsProps = {
		label: string,
		message: string
}

const InputInstructions: FC<InputInstructionsProps> = ({label, message}: InputInstructionsProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<TextField
			label={label}
			variant='outlined'
			error={Boolean(errors['message']?.message)}
			helperText={errors[message]?.message?.toString()}
			multiline
			rows={5}
			fullWidth
			{...register(message)}      
		/>
	)
}

export default InputInstructions
