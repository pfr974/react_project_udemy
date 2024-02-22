const names = ["Frederic", "Paul"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>I am learning about React Components!</p>
    </div>
  );
}

export default Post;
