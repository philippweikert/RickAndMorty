import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import {Character} from "../../model";
import './CharacterDetail.css';

export default function CharacterDetail() {

    const [character, setCharacter] = useState({} as Character);

    const params = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
            .then(response => response.json())
            .then((character: Character) => setCharacter(character))
    }, [params.characterId])

    return (
        <div className={'character-detail'}>
            {character.id &&
                <div>
                    <div>
                        <img data-testid={'character-image'} src={character.image} alt={'The character'}/>
                    </div>
                    <div>
                        <ul>
                            <li>Name: {character.name}</li>
                            <li>Status: {character.status}</li>
                            <li>Spezies: {character.species}</li>
                            <li>Aufenthaltsort: {character.location?.name} </li>
                        </ul>
                        <Link to="/gallery">Zurück</Link>
                    </div>
                </div>}
        </div>
    )
}