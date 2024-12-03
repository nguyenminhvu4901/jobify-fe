import { Checkbox, FormControlLabel } from '@mui/material';
import styles from './styles.module.scss';

interface RememberCheckboxProps {
    label: string;
}

export default function RememberCheckbox({ label, ...props }: RememberCheckboxProps) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    {...props}
                    classes={{ root: styles.checkbox }}
                    label={label}
                />
            }
            label={label}
        />
    );
}
