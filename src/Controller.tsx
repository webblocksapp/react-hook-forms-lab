import {
  Controller as BaseController,
  ControllerProps as BaseControllerProps,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';

export type ControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<BaseControllerProps, 'render' | 'name'> & {
  name?: string;
  render: (args?: {
    field?: ControllerRenderProps<TFieldValues, TName>;
    fieldState?: ControllerFieldState;
    formState?: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
};

export const Controller: React.FC<ControllerProps> = ({
  name,
  control,
  render,
  ...rest
}) => {
  return name && control ? (
    <BaseController name={name} control={control} render={render} {...rest} />
  ) : (
    render?.()
  );
};
