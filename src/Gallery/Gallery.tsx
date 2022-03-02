import { useEffect, useState } from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import { Character, Info, ResponseBody } from '../model';
import './Gallery.css';

export default function Gallery() {

    const [searchName, setSearchName] = useState('');
    const [items, setItems] = useState([] as Array<Character>);
    const [info, setInfo] = useState({} as Info);

    const fetchData = (url: string = 'https://rickandmortyapi.com/api/character') => {
        fetch(url)
            .then(response => response.json())
            .then((responseBody: ResponseBody) => {
                setInfo(responseBody.info);
                setItems(responseBody.results);
                setSearchName('');
            });
    };

    useEffect(() => fetchData(), []);

    const prev = () => fetchData(info.prev);
    const next = () => fetchData(info.next);

    const showAll = async () => {
        let allCharacters: Array<Character> = [];

        let response = await fetch('https://rickandmortyapi.com/api/character');
        let json: ResponseBody = await response.json();
        allCharacters = [...allCharacters, ...json.results]
        while (json.info.next) {
            response = await fetch(json.info.next);
            json = await response.json();
            allCharacters = [...allCharacters, ...json.results]
            setItems(allCharacters);
            setSearchName('');
            await new Promise((resolve, _) => setTimeout(() => resolve({}), 250)); // das gibt es nur, damit der Server nicht überlastet wird
        }
    };

    return (
        <div id="gallery-wrapper">
            <div><button onClick={() => showAll()}>Alle anzeigen</button></div>
            <div id="input-wrapper">
                { info.prev && <button onClick={() => prev()}>Zurück</button> }
                <input data-testid="search-field" type='text' placeholder='Suchbegriff' value={searchName} onChange={ev => setSearchName(ev.target.value)} />
                { info.next && <button onClick={() => next()}>Weiter</button> }
            </div>
            <div>
                Es werden gerade {items.length} Charaktere angezeigt.
            </div>
            <div id="gallery">
                { 
                    items
                        .filter(character => character.name.toLowerCase().includes(searchName.toLowerCase()))
                        .map(character => <div data-testid="gallery-item" key={character.id}><GalleryItem character={character} /></div>)
                }
            </div>
        </div>
    );
}
