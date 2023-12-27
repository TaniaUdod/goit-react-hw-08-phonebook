import { Button, Item } from './ContactItem.styled';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Button>
    </Item>
  );
};
