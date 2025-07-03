import { tvdbStore } from '../tvdbState';
import PageList from '../component/PageList';

function TVSeries() {
  const { tvSearch } = tvdbStore();

  return (
    <PageList 
      type={'tvseries'} 
      fetchKey={'tvPopu'} 
      searchKey={'tv'} 
      onSearch={tvSearch} 
      title={'TV Series'} 
      className={'tv'} 
      listClassName={'tvlist'} 
      listLink={'tvseries'}
    />
  )
}

export default TVSeries