import Layout from '../components/layout/layout';
import LadderList from '../components/lists/ladderList';

import { getLadder, getLadiesLadder } from '../util/api';

export default function Ladder({ ladder, ladiesLadder }) {
  console.log(ladiesLadder);
  return (
    <>
      <Layout>
        <div className='flex justify-center mb-6'>
          <article className='prose'>
            <h1>Ladder</h1>
          </article>
        </div>
        <LadderList ladder={ladder} category='Men' />
        <LadderList ladder={ladiesLadder} category='Ladies' />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const ladder = await getLadder();
  const ladiesLadder = await getLadiesLadder();
  return { props: { ladder, ladiesLadder } };
}
