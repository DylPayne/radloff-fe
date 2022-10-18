import Layout from '../components/layout/layout';
import GalleryList from '../components/lists/galleryList';

// API
import {getGalleryCategoryDeep} from '../util/api';

export default function Gallery({gallery}) {
  console.log(gallery);
  return (
    <>
      <Layout>
        <div className='flex flex-col w-full justify-center items-center'>
          <article className="prose mb-4 text-center">
            <h1>Gallery</h1>
          </article>
        <GalleryList gallery={gallery}/>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const gallery = await getGalleryCategoryDeep();
  return {props: {gallery}}
}