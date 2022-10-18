import Layout from '../components/layout/layout';
import MembershipList from '../components/lists/membershipList';

// API
import {getMembershipsDeep} from '../util/api';


export default function Membership({memberships}) {
  console.log(memberships);
  return (
    <>
      <Layout>
        <div className='flex w-full justify-center'>
          <article className="prose mb-4 text-center">
            <h1>Committee</h1>
          </article>
        </div>
        <MembershipList memberships={memberships}/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const memberships = await getMembershipsDeep();
  return {props: {memberships}}
}