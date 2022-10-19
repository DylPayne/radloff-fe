import Image from '../tools/image';

export default function GalleryList({gallery}) {
  return (
    <div className="flex flex-col w-full">
      {gallery.data.map((item) => (
        <div className='w-full flex flex-col items-center mb-6' key={item.id}>
          <article className="prose mb-3">
            <h2 className="capitalize">{item.attributes.title}</h2>
          </article>
          <div className='grid grid-cols-3 gap-4 w-full'>
          {item.attributes.galleries.data.map((itemf) => (
            <Image image={itemf.attributes.image} key={itemf.id}/>
          ))}
          </div>
        </div>
      ))}
    </div>
  )
}