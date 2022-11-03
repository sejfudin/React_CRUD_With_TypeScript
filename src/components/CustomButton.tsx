import { Stack, Button } from '@mui/material';
import { ButtonPropsInterface } from '../utils/interfaces';


export default function CustomButton(props: ButtonPropsInterface) {
    const { variant = 'outlined', children, color, ...rest } = props;
    return (
        <Stack spacing={2} direction="row">
            <Button variant={variant} color={color} {...rest}>{children}</Button>
        </Stack>
    );
}