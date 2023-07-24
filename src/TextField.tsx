import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { Controller } from './Controller';
import { Control } from 'react-hook-form';

export type TextFieldProps = MuiTextFieldProps & {
  control?: Control<any>;
};

export const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(args) => (
        <MuiTextField
          onBlur={args?.field?.onBlur}
          onChange={args?.field?.onChange}
          value={args?.field?.value}
          name={args?.field?.name}
          {...rest}
        />
      )}
    />
  );
};
