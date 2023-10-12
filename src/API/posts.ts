import { Post } from "@/dtos/post";
import directus from "@/helpers/directus";
import { createItem, readItems } from "@directus/sdk";

export async function getPosts() {
  return await directus.request<Post[]>(readItems("posts"));
}

export async function createPost(post: Post) {
  return await directus.request<Post>(createItem("posts", post));
}
