/** 判斷是否是圖片連結 */
export function isImg(path: string): boolean {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path)
}
