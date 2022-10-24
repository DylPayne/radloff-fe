import Layout from '../components/layout/layout';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useState, useCallback, useEffect } from 'react';
import {
  UilFacebookF,
  UilInstagram,
  UilWhatsapp,
} from '@iconscout/react-unicons';
import Link from 'next/link';

const center = {
  lat: -34.0791903,
  lng: 18.8732513,
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

export default function About() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDUc6Ft1xW-KX7lk-e7N6tjL44A_fvp3xo',
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    map.setZoom(8);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [zoom, setZoom] = useState(null);
  useEffect(() => {
    setZoom(8);
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async () => {
    const body = {
      token: 'your-recaptcha-token',
      formName: 'Test Form',
      FormData: {
        name: name,
        email: email,
        number: number,
        message: message,
      },
    };
    console.log(body);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    fetch(
      'https://warm-dawn-10856.herokuapp.com/api/ezforms/submit/',
      requestOptions
    )
      .then((res) => {
        console.log(res);
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
        alert('Message sent');
      })
      // .then((json) => {
      //   console.log(json);
      // })
      .catch((err) => {
        console.log(err);
        alert('Error sending message');
      });
  };

  return (
    <>
      <Layout>
        <div className='flex flex-col-reverse lg:flex-row gap-x-8 mb-8'>
          <div className='basis-1/3 h-full'>
            <h3 className='lg:mb-6 mt-10 lg:mt-3 text-xl font-semibold tracking-wider'>
              Information
            </h3>
            <div className='flex lg:flex-col sm:flex-row flex-col justify-between lg:justify-center'>
              <div>
                {/*Address*/}
                <h5 className='mt-6 mb-3 font-semibold tracking-wide'>
                  Address
                </h5>
                <p className='tracking-wide'>Radloff Park Squash Club</p>
                <p className='tracking-wide'>153 Lourensford Rd</p>
                <p className='tracking-wide'>Somerset West</p>
                <p className='tracking-wide'>Cape Town</p>
              </div>

              {/*Social media*/}
              <div>
                <h5 className='mt-6 mb-3 font-semibold tracking-wide'>
                  Connect with us
                </h5>
                <div className='flex gap-4 items-center'>
                  <Link href='https://www.facebook.com'>
                    <UilFacebookF size={21} />
                  </Link>
                  <Link href='https://www.instagram.com'>
                    <UilInstagram size={22} />
                  </Link>
                  <Link href='https://www.whatsapp.com'>
                    <UilWhatsapp size={22} />
                  </Link>
                </div>
              </div>

              {/*Business opportunity*/}
              <div>
                <h5 className='mt-6 mb-3 font-semibold tracking-wide'>
                  Business opportunities
                </h5>
                <p className='tracking-wide'>Willem Karsten (Chairman):</p>
                <p className='tracking-wide'>+27 79 123 4567</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col basis-2/3'>
            <h1 className='mb-6 mt-3 text-xl font-semibold tracking-wide'>
              Send a message
            </h1>
            <div className='bg-white mb-4 md:m-0 w-full'>
              <div className='mb-6 pt-0'>
                <input
                  type='text'
                  placeholder='Your name'
                  name='name'
                  className='py-3 placeholder-gray-400 text-gray-600 relative bg-neutral-100 text-sm shadow outline-none border-0 focus:border-radred focus:border-b-2 focus:ring-0 w-full'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-6 pt-0 flex gap-x-6'>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  className='py-3 placeholder-gray-400 text-gray-600 relative bg-neutral-100 text-sm shadow outline-none border-0 focus:border-radred focus:border-b-2 focus:ring-0 w-full'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Phone number'
                  name='number'
                  className='py-3 placeholder-gray-400 text-gray-600 relative bg-neutral-100 text-sm shadow outline-none border-0 focus:border-radred focus:border-b-2 focus:ring-0 w-full'
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className='mb-6 pt-0'>
                <textarea
                  placeholder='Your message'
                  name='message'
                  rows={6}
                  className='py-3 placeholder-gray-400 text-gray-600 relative bg-neutral-100 text-sm shadow outline-none border-0 focus:border-radred focus:border-b-2 focus:ring-0 w-full'
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className='pt-0'>
                <button
                  className='bg-radred text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 w-full'
                  type='submit'
                  onClick={() => handleSubmit()}
                >
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center h-[500px] lg:h-[420px]'>
          <div className='absolute w-[100vw] max-w-full'>
            {isLoaded ? (
              <GoogleMap
                // mapContainerStyle={containerStyle}
                mapContainerClassName='w-[full] h-[500px] lg:h-[420px] relative'
                zoom={8}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{ mapId: '648dc1f7bda2d0c7' }}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <MarkerF position={center} />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
