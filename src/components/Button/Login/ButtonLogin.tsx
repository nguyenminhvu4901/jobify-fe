import {Button} from "@mui/material";
import {styled} from "@mui/material";

const CustomButton = styled(Button)`
    width: 100%;
    background-color: #054736;
    margin-top: 20px;
    color: #fff;
    padding: 10px;
    border: 12px;

    &:hover {
        background-color: #7ca29c;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        transition: all 0.3s ease;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    }
`;

export default function ButtonLogin({title, type}) {
    return <CustomButton type={type}>{title}</CustomButton>;
}