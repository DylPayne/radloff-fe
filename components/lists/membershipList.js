export default function MembershipList({memberships}) {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:mb-8">
          {memberships.data.map((item) => (
            <div className="flex flex-col border" key={item.id}>
              <div>
                <p>{item.attributes.title}</p>
              </div>
              <div>
                <ul>
                  {item.attributes.membershipDetails.map((itemf) => (
                    <li key={itemf.id}>{itemf.description}</li>
                  ))}
                </ul>
              </div>
              <div>
                R{item.attributes.price} p/month
              </div>
            </div>
          ))}
        < /div>
      </div>
    </div>
  )
}