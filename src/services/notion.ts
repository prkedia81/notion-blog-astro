import { NotionBlog } from "@prkedia81/notion-blogs";
import { getWebsite } from "./website";

let notionClient: NotionBlog | null = null;

async function getNotionClient() {
  if (!notionClient) {
    const website = await getWebsite();
    const notionKey = website.notionCredentials.notionKey;
    const blogDatabaseId = website.notionCredentials.blogsDbId.replace(
      /(.{8})(.{4})(.{4})(.{4})(.{12})/,
      "$1-$2-$3-$4-$5"
    );
    const tagDatabaseId = website.notionCredentials.tagsDbId
      ? website.notionCredentials.tagsDbId.replace(
          /(.{8})(.{4})(.{4})(.{4})(.{12})/,
          "$1-$2-$3-$4-$5"
        )
      : "";
    const authorDatabaseId = website.notionCredentials.authorsDbId
      ? website.notionCredentials.authorsDbId.replace(
          /(.{8})(.{4})(.{4})(.{4})(.{12})/,
          "$1-$2-$3-$4-$5"
        )
      : "";
    notionClient = new NotionBlog({
      notionKey: notionKey.trim(),
      blogDatabaseId: blogDatabaseId.trim(),
      tagDatabaseId: tagDatabaseId.trim(),
      authorDatabaseId: authorDatabaseId.trim(),
    });
  }
  return notionClient;
}

export async function getAllPosts() {
  const client = await getNotionClient();
  return await client.getAllPosts();
}

export async function getBlogById(postId: string, includeSimilarPosts: boolean = true) {
  const client = await getNotionClient();
  return await client.getBlogById(postId, includeSimilarPosts);
}

export async function getPostsByTag(tagSlug: string) {
  const client = await getNotionClient();
  return await client.getPostsByTag(tagSlug);
}

export async function getPostsByAuthor(authorSlug: string) {
  const client = await getNotionClient();
  return await client.getPostsByAuthor(authorSlug);
}

// TODO: Add this
// return all the slugs to build static with generateStaticParams
export async function getAllTags() {
  const client = await getNotionClient();
  return await client.getAllTags();
}

// TODO: Add this
// get All author from Ghost CMS for generateStaticParams
export async function getAllAuthors() {
  const client = await getNotionClient();
  return await client.getAllAuthors();
}
