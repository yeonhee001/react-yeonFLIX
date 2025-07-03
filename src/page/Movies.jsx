import { tvdbStore } from '../tvdbState';
import PageList from '../component/PageList';

function Movies() {
  const { movieSearch } = tvdbStore();

  return (
    <PageList 
      type={'movies'} 
      fetchKey={'moviesPopu'} 
      searchKey={'movies'} 
      onSearch={movieSearch} 
      title={'Movies'} 
      className={'movie'} 
      listClassName={'movlist'} 
      listLink={'movies'}
    />
  )
}

export default Movies