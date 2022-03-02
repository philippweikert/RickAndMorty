import { render, waitFor, screen } from '@testing-library/react';
import MyHTTPComponent from './MyHTTPComponent';

test('that response is handled', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve(['Thomas', 'André'])
        } as Response);
    });

    render(<MyHTTPComponent />);

    await waitFor(() =>{
        expect(screen.getByTestId('name-0').textContent).toEqual('Thomas');
        expect(screen.getByTestId('name-1').textContent).toEqual('André');
    });
});