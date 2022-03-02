import { render, fireEvent, screen } from '@testing-library/react';
import MyInputComponent from './MyInputComponent';

test('that input value is rendered', () => {
    render(<MyInputComponent />);

    const nameField = screen.getByTestId('name-input')  as HTMLInputElement;
    fireEvent.change(nameField, { target: { value: 'André' } });

    const showButton = screen.getByText('Send');
    showButton.click();

    expect(screen.getByTestId('name-output').textContent).toEqual('André');
});
