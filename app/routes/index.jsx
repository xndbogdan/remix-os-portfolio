import { useLoaderData } from "remix";
import LRUCache from 'lru-cache';
import Desktop from '~/components/Desktop';



export let loader = async () => {
  const options = {
    // the number of most recently used items to keep.
    // note that we may store fewer items than this if maxSize is hit.
    max: 500,
  
    // if you wish to track item size, you must provide a maxSize
    // note that we still will only keep up to max *actual items*,
    // so size tracking may cause fewer than max items to be stored.
    // At the extreme, a single item of maxSize size will cause everything
    // else in the cache to be dropped when it is added.  Use with caution!
    // Note also that size tracking can negatively impact performance,
    // though for most cases, only minimally.
    maxSize: 5000,
  
    // function to calculate size of items.  useful if storing strings or
    // buffers or other items where memory size depends on the object itself.
    // also note that oversized items do NOT immediately get dropped from
    // the cache, though they will cause faster turnover in the storage.
    sizeCalculation: (value, key) => {
      // return an positive integer which is the size of the item,
      // if a positive integer is not returned, will use 0 as the size.
      return 1
    },
  
    // function to call when the item is removed from the cache
    // Note that using this can negatively impact performance.
    dispose: (value, key) => {
      freeFromMemoryOrWhatever(value)
    },
  
    // max time to live for items before they are considered stale
    // note that stale items are NOT preemptively removed by default,
    // and MAY live in the cache, contributing to its LRU max, long after
    // they have expired.
    // Also, as this cache is optimized for LRU/MRU operations, some of
    // the staleness/TTL checks will reduce performance, as they will incur
    // overhead by deleting items.
    // Must be a positive integer in ms, defaults to 0, which means "no TTL"
    ttl: 1000 * 60 * 5,
  
    // return stale items from cache.get() before disposing of them
    // boolean, default false
    allowStale: false,
  
    // update the age of items on cache.get(), renewing their TTL
    // boolean, default false
    updateAgeOnGet: false,
  
    // update the age of items on cache.has(), renewing their TTL
    // boolean, default false
    updateAgeOnHas: false,
  
    // update the "recently-used"-ness of items on cache.has()
    // boolean, default false
    updateRecencyOnHas: false,
  }
  const cache = new LRUCache(options)
  let data = cache.get('tracklist')
  if(!data) {
    data = await fetch('https://api.poolsidefm.workers.dev/v1/get_tracks_by_playlist');
    cache.set('tracklist', data)
  }
  
  // return userTimeline;
  return data;
};

export default function Index() {
  const tracklist = useLoaderData();
  return (
    <Desktop tracklist={tracklist}></Desktop>
  );
}
