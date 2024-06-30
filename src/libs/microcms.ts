// SDK利用準備
import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSListResponse,
  MicroCMSQueries,
  MicroCMSImage,
} from "microcms-js-sdk";

// 型定義
export type Blogs = {
  title: string;
  content: string;
  eyecatch: string;
  category: string;
};
export type BlogsResponse = MicroCMSListResponse<Blogs>;

// clientの作成
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 'blogs' APIからIDを指定して個別データを取得する関数
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogsResponse>({ endpoint: "blogs", queries });
};
