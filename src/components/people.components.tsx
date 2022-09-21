import { usePeopleStore } from '../store';

const People = () => {
  const people = usePeopleStore((state: any) => state.people);

  return (
    <div>
      <p>We have {people.length} people in our database</p>
      <ul>
        {people.map((p: any) => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
