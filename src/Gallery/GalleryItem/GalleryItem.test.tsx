import { render, screen } from '@testing-library/react';
import GalleryItem from './GalleryItem';

test('that component is rendered correctly', () => {
    // given
    const character = {
        id: 4711,
        name: 'Rick',
        status: 'Alive',
        image: 'http://imageurl'
    };

    // when
    render(<GalleryItem character={character} />);

    // then
    const imageTag = screen.getByTestId('character-image') as HTMLImageElement;
    expect(imageTag.src).toEqual('http://imageurl/');
    expect(screen.getByTestId('character-name').textContent).toEqual('Name: Rick');
    expect(screen.getByTestId('character-status').textContent).toEqual('Status: Alive');
});
