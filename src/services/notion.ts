import { NotionBlog } from "@prkedia81/notion-blogs";
import { NOTION_BLOG_ID, NOTION_KEY } from "astro:env/server";

const notionClient = new NotionBlog({
  notionKey: NOTION_KEY,
  blogDatabaseId: NOTION_BLOG_ID,
});

export async function getAllPosts() {
  return await notionClient.getAllPosts();
}

export async function getBlogBySlug(postSlug: string) {
  return await notionClient.getBlogBySlug(postSlug);
}

// return all posts realted to tag slug
export async function getPostsByTag(tagSlug: string) {
  return await notionClient.getPostsByTag(tagSlug);
}

// TODO: Add this
// return all the slugs to build static with generateStaticParams
// export async function getAllTags() {
//   return await notionClient.getAllTags();
// }

// get author related posts
export async function getPostsByAuthor(authorSlug: string) {
  return await notionClient.getPostsByAuthor(authorSlug);
}

// TODO: Add this
// get All author from Ghost CMS for generateStaticParams
// export async function getAllAuthors() {
//   return await notionClient.getAllAuthors();
// }
