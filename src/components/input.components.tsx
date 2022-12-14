import { useRef } from 'react';
import { usePeopleStore } from '../store';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addPerson = usePeopleStore((state: any) => state.addPerson);

  const add = () => {
    addPerson(inputRef?.current?.value);
    inputRef!.current!.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Person</button>
    </div>
  );
};

export default Input;
