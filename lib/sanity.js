import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"; // 也可以把 dataset 放在 env 里

// 💡 可以在这里加个自检，如果没读取到 ID 直接在终端报错提醒你
if (!projectId) {
  console.error("❌ 错误：未找到 Sanity Project ID，请检查 .env 文件！");
}

export const client = createClient({
  projectId: projectId, 
  dataset: dataset,
  apiVersion: "2024-01-01",
  // 建议：开发环境用 false (实时更新)，生产环境用 true (缓存加速)
  useCdn: process.env.NODE_ENV === "production", 
});