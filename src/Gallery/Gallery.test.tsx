import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import Gallery from './Gallery';

test('that items are filtered', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                info: {},
                results: [{
                    id: 1,
                    name: 'Rick',
                    status: 'Alive',
                    image: 'image1'
                }, {
                    id: 2,
                    name: 'Morty',
                    status: 'Alive',
                    image: 'image2'
                }, {
                    id: 3,
                    name: 'Summer',
                    status: 'Alive',
                    image: 'image3'
                }, {
                    id: 4,
                    name: 'Beth',
                    status: 'Alive',
                    image: 'image4'
                }, {
                    id: 5,
                    name: 'Jerry',
                    status: 'Alive',
                    image: 'image5'
                }]
            })
        } as Response);
    });

    render(<Gallery />);

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(5);
    });

    const searchField = screen.getByTestId('search-field') as HTMLInputElement;

    fireEvent.change(searchField, { target: { value: 'r' }});

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toBe(4);
    });
});
