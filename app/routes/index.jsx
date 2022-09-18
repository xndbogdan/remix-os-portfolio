import { useLoaderData } from "remix";
import LRUCache from 'lru-cache';
import Desktop from '~/components/Desktop';
import mainResponse from '~/responses/main';

export let loader = async () => {
  // const options = {
  //   max: 500,
  //   maxSize: 5000,
  //   sizeCalculation: (value, key) => {
  //     return 1
  //   },
  //   dispose: (value, key) => {
  //     freeFromMemoryOrWhatever(value)
  //   },
  //   ttl: 1000 * 60 * 5,
  //   allowStale: false,
  //   updateAgeOnGet: false,
  //   updateAgeOnHas: false,
  //   updateRecencyOnHas: false,
  // }
  // const cache = new LRUCache(options)
  // let data = cache.get('tracklist')
  
  // return userTimeline;
  const shuffledResponse = mainResponse.sort((a, b) => 0.5 - Math.random());
  return shuffledResponse;
};

export default function Index() {
  const tracklist = useLoaderData();
  return (
    <Desktop tracklist={tracklist}></Desktop>
  );
}