import P from 'prop-types';
import './styles.css';

export const PostCard = (props) => {
  const { post } = props;
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: P.shape({
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired,
  }),
};
