import React, { useSyncExternalStore } from 'react'

// Add type for the callback
function subscribe(callback: () => void): () => void {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapShot() {
    return window.innerWidth; 
}
  
const useWindowWidth = () => {
  return useSyncExternalStore(subscribe, getSnapShot)
}

export default useWindowWidth