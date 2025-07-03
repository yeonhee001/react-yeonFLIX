import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { tvdbStore } from '../tvdbState';
import Card from './Card';

function PageList({type, fetchKey, searchKey, onSearch, title, className, listClassName, listLink}) {
  const {fetchData, searchResults, setSelectItem} = tvdbStore();

  const [state,setState] = useState('all');
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const newData = await fetchData(fetchKey, page);
      if(newData){
        setList(prev => [...prev, ...newData]);
      }
    };
    getData();
  }, [page]);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className={className}>
      <div className='top'>
        <p>{title}</p>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault(); // 페이지 새로고침막기
        onSearch(e.target.search.value);
        setState('search');
      }} className='search'>
        <input type="text" placeholder='Enter Keyword' name='search'/>
        <input type="submit" value="search"/>
      </form>
      <ul className={listClassName}>
        {(state === 'all' ? list : searchResults[searchKey] || []).map(item => (
          <li key={item.id} onClick={() => setSelectItem(item.id)}>
            <NavLink to={`/${listLink}/${item.id}`}>
              <Card item={item} />
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='view'>
        <button onClick={()=>setPage((prevPage) => prevPage + 1)}>더보기</button>
      </div>
    </div>
  )
}

export default PageList