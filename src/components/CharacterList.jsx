import { Character } from "./Character"

export const CharacterList = ({characters}) => {
  return (
    <div className="columns is-multiline is-mobile">
        {
            characters.map(character => {
                return(
                    <div className="column is-full-mobile is-one-third-tablet is-2-desktop" key={character.id}>
                        <Character character={character}/>
                    </div>
                )
            })
        }
    </div>
  )
}
