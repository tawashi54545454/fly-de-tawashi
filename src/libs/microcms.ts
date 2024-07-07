// SDK利用準備
import { Debug } from "astro:components";
import { createClient, type MicroCMSDate } from "microcms-js-sdk";
import type {
  MicroCMSListResponse,
  MicroCMSQueries,
  MicroCMSImage,
} from "microcms-js-sdk";

// 型定義
export interface Category extends MicroCMSDate {
  id: string;
  name: string;
}
export interface Blogs {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
  toppage: boolean;
  slug: string;
  title: string;
  content: string;
  description: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
}
export type BlogsResponse = MicroCMSListResponse<Blogs>;

// clientの作成
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

function tws(url: string): string {
  return url.replace(
    /https:\/\/images.microcms-assets.io\/assets\/[^"]+\/([^"]+)/g,
    "https://tawashi.jp/assets/$1",
  );
}

// 'blogs' APIからIDを指定して個別データを取得する関数
export const getBlogs = async (queries?: MicroCMSQueries) => {
  const data = await client.get<BlogsResponse>({ endpoint: "blogs", queries });
  data.contents.map((post) => {
    if (post.eyecatch) {
      post.eyecatch.url = tws(post.eyecatch.url);
    }
    post.content = tws(post.content);
    console.log(post);
  });
  return data;
};
