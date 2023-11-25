import Card from './Card';

export default function Cards({characters}) {
  return (
    <div>
      {characters.map(character => (
        <Card
          key={character.id}
          {...character}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      ))}
    </div>
  );
}
