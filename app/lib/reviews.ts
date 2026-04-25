import { readdir } from 'fs/promises'
import path from 'path'

const reviewsDirectory = path.join(process.cwd(), 'public', 'reviews')

export async function getReviewImages() {
  const files = await readdir(reviewsDirectory)

  return files
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }))
}
