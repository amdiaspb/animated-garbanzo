import { Button } from "./Button";

export function PagNav({ posts, setUrl }) {
  return (
    <nav>
      {posts.previous && <Button onClick={() => {
        setUrl(posts.previous || "/");
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}>{"<"}</Button>}

      <Button onClick={() => {
        setUrl(posts.next);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}>{">"}</Button>
    </nav>
  );
}
