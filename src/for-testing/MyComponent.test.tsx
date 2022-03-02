import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('that component is rendered correctly', () => {
    // given
    const name = 'André';

    // when
    render(<MyComponent name="André" />);

    // then
    expect(screen.getByTestId('the-name').textContent).toEqual('andré');
});
