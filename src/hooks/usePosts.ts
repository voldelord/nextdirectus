import { getPosts } from "@/API/posts";
import { Post } from "@/dtos/post";
import { useCallback, useEffect, useState } from "react";

export function usePosts(fetchOnInitialLoad = false) {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async function () {
    const posts = await getPosts();

    setPosts(posts);
  }, []);

  useEffect(() => {
    fetchOnInitialLoad && fetchPosts();
  }, [fetchOnInitialLoad]);

  return {
    posts,
    fetchPosts,
  };
}
