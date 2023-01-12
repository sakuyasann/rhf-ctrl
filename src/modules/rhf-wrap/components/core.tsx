import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'
import { createPolymorphicComponent, extraSystem } from '../../../share'

interface WrapProps {
  rhf: UseControllerProps<any, string>
  component: any
}

export const _Core = ({
  component,
  rhf,
  ...others
}: WrapProps & React.ComponentType<WrapProps['component']>) => {
  const { rest } = extraSystem(others)
  const Component = component
  const {
    field,
    fieldState: { error },
  } = useController(rhf)

  return (
    <Component
      {...rest}
      error={error?.message}
      ref={field.ref}
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

export const Core = createPolymorphicComponent(_Core)
