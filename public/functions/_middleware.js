const handleReverseProxy = async (context) => {
  const originalUrl = context.request.url;
  const url = new URL(originalUrl);
  // /assets/内でなければ処理を中断
  if (!url.pathname.startsWith("/assets/")) {
    return await context.next();
  }
  // /assets/内であればよりコンテンツを取得
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
};

export const onRequest = [handleReverseProxy];
