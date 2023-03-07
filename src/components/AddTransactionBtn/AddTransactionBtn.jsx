import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { AddBtn, AddIcon } from './AddTransactionBtn.styled';

export function AddTransactionBtn() {
  const dispatch = useDispatch();

  return (
    <AddBtn
      type="button"
      aria-label="add transaction button"
      onClick={() => dispatch(isModalAddTransactionOpen())}
    >
      <div>
        <AddIcon />
      </div>
    </AddBtn>
  );
}