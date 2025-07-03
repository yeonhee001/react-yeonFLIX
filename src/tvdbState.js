import axios from 'axios';
import { create } from 'zustand'



const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params : {
    api_key : "f89a6c1f22aca3858a4ae7aef10de967",
    language : "ko-kr",
  }
});

export const tvdbStore = create((set)=>({
  data:{
    moviesPopu : [],
    moviesTop : [],
    tvPopu : [],
    tvTop : []
  },
  searchResults : {
    movies : [],
    tv : []
  },
  genres: {
    moGen : [],
    tvGen : []
  },
  
  selectItem: null,
  setSelectItem: (item) => set({selectItem:item}),

  fetchData: async(type, page=1)=>{
    let url = "";
    let key = "";

    switch(type){
      case "moviesPopu" : url="/movie/popular"; key = "moviesPopu"; break;
      case "moviesTop" : url="/movie/top_rated"; key = "moviesTop"; break;
      case "tvPopu" : url="/tv/popular"; key = "tvPopu"; break;
      case "tvTop" : url="/tv/top_rated"; key = "tvTop"; break;
      
      default:
      return;
    }
    const res = await instance.get(url, {params : {
      api_key : "f89a6c1f22aca3858a4ae7aef10de967",
      language : "ko-kr",
      page : page
    }});
    set((state) => ({
      data: { ...state.data, [key]:res.data.results }
    }));
    // console.log(type, page);

    return res.data.results; // 데이터를 반환

  },

  movieSearch : async (value)=>{
    if (!value) return;
    
    const res = await instance.get("/search/movie",{params: {query : value}});
    
    set({ searchResults: {movies : res.data.results, tv : [] } });
  },

  tvSearch : async (value)=>{
    if (!value) return;
    const res = await instance.get("/search/tv",{params: {query : value}});

    set({ searchResults: {movies : [], tv : res.data.results } });
  },

  movieGenres : async ()=>{
    const res = await instance.get("/genre/movie/list")

    set({ ganres: {moGan : res.data.ganres, tvGan : [] } });
  },

  tvGenres : async ()=>{
    const res = await instance.get("/genre/tv/list")

    set({ ganres: {moGan : [], tvGan : res.data.ganres } });
  },
  
  detail : async (type,id)=>{
    const res = await instance.get(`/${type}/${id}`,{params:{append_to_response:'videos,images,casts'}})
    set({ selectItem: res.data });
    console.log(res.data)
  },
  
}));