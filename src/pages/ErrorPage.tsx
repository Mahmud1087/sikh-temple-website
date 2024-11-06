import { Link } from 'react-router-dom';

export default function Errorpage() {
  return (
    <div
      id='error-page'
      className='flex items-center justify-center flex-col gap-6 h-screen bg-gray-200 font-lexend'
    >
      <h1 className='text-5xl font-bold italic'>Oops!</h1>
      <p className='text-2xl'>
        Sorry, An error occured. Return to the home page
      </p>
      <Link to='/' className='bg-blue-500 px-8 py-2 rounded-lg text-white'>
        Home
      </Link>
    </div>
  );
}
