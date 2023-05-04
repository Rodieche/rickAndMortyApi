import { Character } from "./Character"

export const CharacterList = ({characters}) => {
  return (
    <div className="columns is-multiline">
        {
            characters.map(character => {
                return(
                    <div className="column is-2" key={character.id}>
                        <Character character={character}/>
                    </div>
                )
            })
        }
    </div>
  )
}
