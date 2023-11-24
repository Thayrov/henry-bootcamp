import Card from './Card';

export default function Cards({characters}) {
  return (
    <div>
      {characters.map(character => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
}
