export default function myImageLoader({ src, width, quality }) {
  return `https://az-demo-lb.digi-team.work/nextjs/${src}?w=${width}&q=${quality || 75}`
}