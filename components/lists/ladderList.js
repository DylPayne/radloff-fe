export default function LadderList({ladder}) {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full lg:mb-8 max-w-[500px] border-l-2 border-radred space-y-2">
          {ladder.data.map((item) => (
            <div className='flex bg-neutral-100 w-full flex py-2 px-4' key={item.key}>
              <div className='basis-1/12'>
                <p>{item.attributes.rank + 1}</p>
              </div>
              <div className='basis 11/12'>
                <p>{item.attributes.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}