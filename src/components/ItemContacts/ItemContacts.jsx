import PropTypes from 'prop-types';
import { ButtonDelete, BlockName } from 'components/ItemContacts/ItemContacts.styled';


export const ItemContacts = ({ name, number, deleteContact, id }) => {
    return (
        <>
            <li>
                <BlockName>{name}</BlockName>
                <span>{number}</span>
                <ButtonDelete type="button" onClick={() => deleteContact(id)}>Delete</ButtonDelete>
            </li>
        </>
    );
};

ItemContacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    id: PropTypes.string
};