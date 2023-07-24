import { useForm } from 'react-hook-form';
import { TextField } from './TextField';
import { Button } from '@mui/material';

export const App = () => {
  const { control, reset } = useForm({
    defaultValues: {
      firstName: 'aaaa',
    },
  });

  return (
    <>
      <TextField
        name="firstName"
        control={control}
        onChange={() => {
          console.log('XXXXX');
        }}
      />
      <Button onClick={() => reset()}>Reset</Button>
    </>
  );
};
