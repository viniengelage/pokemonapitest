import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from '.';

describe('Modal component', () => {
  it('should renders correctly', () => {
    const closeFunction = jest.fn();

    render(
      <Modal
        hide={closeFunction}
        headerText="Modal test"
        isShown
        modalContent={<div>Test</div>}
      />,
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should close on click button', () => {
    const closeFunction = jest.fn();

    render(
      <Modal
        hide={closeFunction}
        headerText="Modal test"
        isShown
        modalContent={<div>Test</div>}
      />,
    );

    const closeButton = screen.getByTitle('closeButton');

    fireEvent.click(closeButton);

    expect(closeFunction).toHaveBeenCalled();
  });
});
