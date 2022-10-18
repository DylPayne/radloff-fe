import Layout from '../components/layout/layout';
import CommitteeList from '../components/lists/committeeList';

// API
import {getCommitteeDeep} from '../util/api';


function About({committee}) {
  console.log(committee)
  return (
    <>
      <Layout>
        <div className="text-center">
          <CommitteeList committee={committee}>
            <article className="prose">
              <h1 className="text-4xl mb-6">About us</h1>
              <p>
                Built in 1979, our little club finds itself in the middle of the Radloff Park Sports grounds. Surrounded
                by mountains and a stone’s throw away from the Lourens river, we are proud to welcome squash players
                from all over the world.
              </p>
              <p>
                From humble beginnings and with a rich history, we have moved from a very social club to a very
                competitive and dedicated one. Keeping our social roots but adding skill and fitness to the mix. Our
                Mens, Ladies and Masters teams compete in the WP Leagues and we have a good cross section of players -
                from 1st League with some of the top juniors in the country right down to very casual beginners who just
                love to sweat it out and give their best.
              </p>
              <p>
                Our coaching staff is top notch. Richard Castle, who served as the National Squash Coach for many years
                and have ample international experience, can help any level of player get the best out of their natural
                talents. He has trained some junior coaches and together they coach a number of schools in the Boland,
                helping to grow the game for future generations.
              </p>
              <p>
                Our development program is also gaining momentum and we welcome any player from any background to join
                our amazing club.
              </p>
              <p>
                Our 4 courts are spotless and we pride ourselves in doing the best with limited means. Pop in anytime,
                speak to our club manager Karen and give squash a go. It has been voted as the best sport by Forbes
                magazine and fits in so well with our modern lifestyles.
              </p>
              <p>What are you waiting for?</p>
              <p>Willem Karsten, Chairman</p>
            </article>
          </CommitteeList>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const committee = await getCommitteeDeep();
  return {props: {committee}}
}

export default About;