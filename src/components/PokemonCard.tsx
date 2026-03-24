interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <section>
      {pokemon.imgSrc ? (
        <figure>
          <img src={pokemon.imgSrc} alt={pokemon.name} />
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      ) : (
        <p>???</p>
      )}
    </section>
  );
}

export default PokemonCard;
