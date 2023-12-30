import { Button } from '.'
import { fireEvent, render, screen } from '@testing-library/react'

describe('<Button />', () => {
  it('Should render the button with the text "Load more"', () => {
    render(<Button text='Load more'/>)

    const button = screen.getByRole('button', {name:/load more/i})
    expect(button).toBeInTheDocument();
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text='Load more' onClick={fn} />)
    
    const button = screen.getByRole('button', {name:/load more/i})

    fireEvent.click(button);

    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledTimes(1)
    
  });

  it('Should be disabled when disabled is true', () => {
    render(<Button text='Load more' disabled={true}/>)
    const button = screen.getByRole('button', {name:/load more/i})
    expect(button).toBeDisabled()
  });

  it('Should be enabled when disabled is false', () => {
    render(<Button text='Load more' disabled={false}/>)
    const button = screen.getByRole('button', {name:/load more/i})
    expect(button).toBeEnabled()
  });
})