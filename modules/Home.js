
import axios from 'axios';


function Home({ photos }) {
  let _photos =  photos || []
  return (
    <div className="photos">
      {
        _photos.map((photo, index) => (
          <figure key={index}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))
      }
    </div>
  )
}

export const getPrerenderProps =  async (ctx) => {
  const _limits =  (ctx && ctx.query && ctx.query._limits) || process.env.limits ||0;
  const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=' + _limits)
  return { props:{photos: res.data} }
}

export const Page = Home;