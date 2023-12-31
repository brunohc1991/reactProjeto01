const { render, screen } = require('@testing-library/react');
const { PostCard } = require('.');

const mock = {
  post: {
    title: 'Title',
    body: 'body',
    id: 1,
    cover: 'img/img.png',
  },
};

describe('<PostCard />', () => {
  it('Should render PostCard correctly', () => {
    render(<PostCard {...mock} />);

    expect(screen.getByRole('img', { name: /title/i })).toHaveAttribute('src', mock.post.cover);
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText('body')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
