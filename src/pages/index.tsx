import Login from "@/componets/Login";
import { usePosts } from "@/hooks/usePosts";

function Home() {
  const { posts } = usePosts(false);

  return (
    <div>
      <Login />

      {/*<ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </li>
        ))}
        </ul>*/}
    </div>
  );
}

export default Home;
