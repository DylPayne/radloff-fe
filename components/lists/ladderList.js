export default function LadderList({ladder}) {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full lg:mb-8">
          {ladder.data.map((item) => (
            <div className='flex'>
              <div>
                <p>{item.attributes.rank}</p>
              </div>
              <div>
                <p>{item.attributes.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}