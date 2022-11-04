import PropTypes from 'prop-types';
import { ListItem, DeleteBtn, List } from './PhonebookStyled';

export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, phone, id }) => {
        return (
            <ListItem key={id}>
                {name}: {phone}
                <DeleteBtn type="button" onClick={() => removeContact(id)}>x</DeleteBtn>
            </ListItem>
        )
    })

    return (
            <List>{elements}</List>
    )
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ),
    removeContact: PropTypes.func.isRequired,
}