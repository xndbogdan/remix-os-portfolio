export let loader = async () => {
  return {};
};

export default function Index() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <h1 className="text-2xl md:text-4xl text-white font-bold px-4 py-4">Reel Embed Demo</h1>
          <div className="flex items-center">
            <a className="text-white hover:text-gray-300 px-4 py-4" href="/">Home</a>
            <a className="text-white hover:text-gray-300 px-4 py-4" href="https://reelcrafter.com">Reelcrafter</a>
          </div>
        </div>
      </div>
      <iframe className="flex-grow w-screen" width="560" height="315" src="https://play.reelcrafter.com/u_NizoqFTTyPJOYUVJdPig" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}