import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className='item'>
    <div className='content'>
        <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={() => delTodo(itemProp.id)} type="submit">Delete</button>

        {itemProp.title}
    </div>
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
