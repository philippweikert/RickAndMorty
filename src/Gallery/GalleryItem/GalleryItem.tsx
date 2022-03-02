import { Character } from "../../model";
import {Link} from "react-router-dom";

import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <div>
                <Link to={`/gallery/${props.character.id}`}>
                    <img data-testid={'character-image'} src={props.character.image} alt="The character"/>
                </Link>
            </div>
            <div>
                <ul>
                    <li data-testid="character-name">Name: { props.character.name }</li>
                    <li data-testid="character-status">Status: { props.character.status }</li>
                </ul>
            </div>
        </div>
    )
}