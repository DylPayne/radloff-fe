export default function MembershipList({memberships}) {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:mb-8">
          {memberships.data.map((item) => (
            <div className="flex flex-col p-4 bg-neutral-100 border-b-2 border-radred" key={item.id}>
              <div>
                <article className="prose">
                  <h3>{item.attributes.title}</h3>
                </article>
              </div>
              <div className='mt-4'>
                <ul>
                  {item.attributes.membershipDetails.map((itemf) => (
                    <li key={itemf.id}>
                      <article className="prose">
                        <p>{itemf.description}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-4'>
                <span className="text-2xl font-bold">R{item.attributes.price}</span><span>/mo</span>
              </div>
            </div>
          ))}
        < /div>
      </div>
    </div>
  )
}