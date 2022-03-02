import { Character } from "../../model";

import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <div><img data-testid="character-image" src={props.character.image} alt="The character" /></div>
            <div>
                <ul>
                    <li data-testid="character-name">Name: { props.character.name }</li>
                    <li data-testid="character-status">Status: { props.character.status }</li>
                </ul>
            </div>
        </div>
    )
}