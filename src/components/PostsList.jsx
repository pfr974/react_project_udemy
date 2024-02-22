import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post
          author="Fred"
          body="I am learning about React components •̀.̫ •́✧!"
        />
        <Post author="Paul" body="No kidding!" />
      </ul>
    </>
  );
}

export default PostsList;
