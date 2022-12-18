import SvgComponent from './SvgComponent';

export default function LinlToGithub() {
  const out = (
    <a
      className='fixed bottom-11 right-11 flex items-center duration-300 hover:text-secondary'
      target='_blank'
      rel='noreferrer noopener'
      href='https://github.com/AnderyDov/test_vidita'
    >
      <span className='test-xl'>gitHub проекта{'  '}</span>
      <div className='w-11 h-11 ml-2 '>
        <SvgComponent name='github' />
      </div>
    </a>
  );

  return out;
}
