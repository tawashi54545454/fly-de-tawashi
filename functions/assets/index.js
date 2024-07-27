export async function onRequest(context) {
  // 特定パス以下をproxyさせる
  const originalUrl = context.request.url;
  const url = new URL(originalUrl);
  const newUrl = new URL(`https://tawashi.jp${url.pathname}`);
  const response = await fetch(new Request(newUrl), {
    headers: new Headers(context.request.headers),
  });
  // 取得したコンテンツをレスポンスとして返す
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: new Headers(response.headers),
  });
}
