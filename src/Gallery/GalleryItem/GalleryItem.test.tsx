import { render, screen } from '@testing-library/react';
import GalleryItem from './GalleryItem';
import {MemoryRouter} from "react-router-dom";

test('that component is rendered correctly', () => {
    // given
    const character = {
        id: 4711,
        name: 'Rick',
        status: 'Alive',
        image: 'http://imageurl',
        species: 'Human',
        location: {name: 'Earth'},
        origin: {name: 'Earth'}
    };

    // when
    render(<GalleryItem character={character} />, {wrapper: MemoryRouter});

    // then
    const imageTag = screen.getByTestId('character-image') as HTMLImageElement;
    expect(imageTag.src).toEqual('http://imageurl/');
    expect(screen.getByTestId('character-name').textContent).toEqual('Name: Rick');
    expect(screen.getByTestId('character-origin').textContent).toEqual('Origin: Earth');
});
