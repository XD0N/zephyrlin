'use client'

import { NextStudio } from 'next-sanity/studio'

// 👇 这里是重点：调整后的引用路径
// 原理：
// .. 跳出 [[...index]]
// .. 跳出 studio
// .. 跳出 app (回到根目录)
// 然后进入 sanity 文件夹找到 config
import config from '../../../sanity/sanity.config' 

export default function StudioPage() {
  return <NextStudio config={config} />
}