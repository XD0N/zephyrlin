import { client } from "./sanity";

export async function getProjects() {
  const query = `*[_type == 'project'] | order(_updatedAt desc) {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
    }`;

  //const projects = await client.fetch(query);
  // 👇 关键修改在这里！请仔细看 client.fetch 的参数
  const projects = await client.fetch(
    query, 
    {}, // 第二个参数是查询变量 (params)，这里没有，必须传个空对象
    {
      // 第三个参数是 Next.js 的配置
      cache: 'no-store',       // 告诉 fetch：绝对不要缓存！
      next: { revalidate: 0 }  // 双重保险：过期时间为 0 秒
    }
  );

  return projects;
}
