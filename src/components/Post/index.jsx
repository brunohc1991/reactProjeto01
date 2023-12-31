import P from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCard';

export const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
