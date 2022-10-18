import Layout from '../components/layout/layout';
import LadderList from '../components/lists/ladderList';

import {getLadder} from '../util/api';

export default function Ladder({ladder}) {
  console.log(ladder);
  return (
    <>
      <Layout>
        <div className='flex justify-center'>
          <article className="prose">
            <h1>Ladder</h1>
          </article>
        </div>
        <LadderList ladder={ladder}/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const ladder = await getLadder();
  return {props: {ladder}};
}