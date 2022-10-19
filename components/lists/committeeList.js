import Image from '../tools/image';


export default function CommitteeList({committee, children}) {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <article className="prose mb-4">
          <h1>Committee</h1>
        </article>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:mb-8">
          {committee.data.map((item) => (
            <div className="flex flex-col shadow border-b-2 border-radred bg-neutral-100" key={item.id}>
              <div className='p-5'>
                <div className="overflow-hidden rounded-full grayscale">
                  <Image image={item.attributes.image}/>
                </div>
              </div>
              <div className="">
                <article className="prose">
                  <h3>{item.attributes.name}</h3>
                </article>
              </div>
              <div className="mb-3">
                <article className="prose">
                  <p>{item.attributes.title}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}