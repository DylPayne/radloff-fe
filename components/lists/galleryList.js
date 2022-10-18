import Image from '../tools/image';

export default function GalleryList({gallery}) {
  return (
    <div className="flex flex-col border w-full">
      {gallery.data.map((item) => (
        <div className='border w-full flex flex-col items-center mb-6'>
          <article className="prose border">
            <h3 className="capitalize">{item.attributes.title}</h3>
          </article>
          <div className='grid grid-cols-3 gap-4 border w-full'>
          {item.attributes.galleries.data.map((itemf) => (
            <Image image={itemf.attributes.image}/>
          ))}
          </div>
        </div>
      ))}
    </div>
  )
}