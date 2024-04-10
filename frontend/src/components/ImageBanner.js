import appWindowArt from '../assets/appWindowArt.png';
import dribbleLogo from '../assets/dribbbleLogo.png';

function ImageBanner() {
  return (
    <div className="w-2/5 bg-dribble-orange h-screen align-middle justify-center hidden md:grid">
      <img className='pl-9 pb-0 pt-5 w-40 object-contain' src={dribbleLogo} alt={"Logo"} />
      <h1 className='text-3xl text-dribbble-orange-text px-9 py-5 text-left font-bold'>Discover the worlds' top Designers & Creatives</h1>
      <img className='w-full h-auto' src={appWindowArt} alt={"window art"} />
    </div>
  );
}

export default ImageBanner;
