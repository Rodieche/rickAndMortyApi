export const Character = ({character}) => {
  return (
    <div>
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src={character.image} alt={character.name} className="is-rounded" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={character.image} alt={character.name} className="is-rounded" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{character.name}</p>
                        <p className="subtitle is-6 text-overflow">
                            <span class="icon">
                                <i class="fas fa-dragon"></i>
                            </span>
                            {character.species}
                        </p>
                        <p className="subtitle is-6 text-overflow">
                            <span class="icon">
                                <i class="fas fa-earth-americas"></i>
                            </span>
                            {character.origin.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
