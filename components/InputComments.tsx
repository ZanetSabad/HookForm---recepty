import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

type InputCommentsProps = {
    label: string,
    message: string
}

const InputComments: FC<InputCommentsProps> = ({label, message}: InputCommentsProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()
  return (
    <TextField
        label={label}
        variant='outlined'
        error={Boolean(errors["message"]?.message)}
        helperText={errors[message]?.message?.toString()}
        fullWidth      
        multiline
        rows={5}
        {...register(message)}
    />
  )
}

export default InputComments
