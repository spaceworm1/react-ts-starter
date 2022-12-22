import { render, screen, fireEvent } from '@testing-library/react';

import Button from './button.component';

test('Check if button types works correctly', () => {
    // render(<Button />);

    render(<Button textContent="test" variant="submit" />);
    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toHaveTextContent('test');
    expect(button).toBeEnabled();
});
