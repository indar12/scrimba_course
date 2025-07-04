import React, { useDeferredValue, useMemo, useState } from 'react'

const largeList = Array.from({length: 20000},(_,i) => `Item${i}`);
const SearchableList = () => {
    const [query,setQuery] = useState('');
    const deferredQuery = useDeferredValue(query); // delay updating list while typing

    const filteredList = useMemo(()=>{
        return largeList.filter((item)=>(
            item.toLowerCase().includes(deferredQuery.toLowerCase())
        ))
    },[deferredQuery])

  return (
    <div>
        <input type='text' value={query} placeholder='Search...' onChange={e => setQuery(e.target.value)}/>
        <ul>
            {
                filteredList.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default SearchableList