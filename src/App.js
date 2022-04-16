import { useState ,useEffect} from 'react';
import './App.css';
import Card from "./components/Card"
import {AiFillGithub} from "react-icons/ai"
import 'tw-elements';
import LoadingBar from "react-top-loading-bar"
import Spinner from "./components/Spinner"
function App() {
  const [data , setData] = useState([])
  const [page , setPage] = useState(1)
  const [lang , setLang] = useState("javascript")
  const [progress , setProgress] = useState(0) 
  const [loading, setLoading] = useState(true)
 const updateNews = async ()=>{
    setLoading(true)
    const url= `https://api.github.com/search/repositories?q=language:${lang}&page=${page}&per_page=40`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    let data_items = parsedData.items
    setData(data_items)
    setLoading(false)
  }
  useEffect(() =>{
    updateNews()
  },[])
  const handlePrev = async ()=>{
    if(page>1){
      window.scroll({top: 0, behavior: "smooth"})
      setLoading(true)
      setPage(page - 1);
      const url = `https://api.github.com/search/repositories?q=language:${lang}&page=${page}&per_page=40`
      let data = await fetch(url)
      let parsedData = await data.json()
      let data_items = parsedData.items
      setData(data_items)
      setLoading(false)
    }
  }
  const handleNext = async ()=>{
    if(page<41){
      setLoading(true)
      setProgress(30)
      setPage(page + 1);
      const url = `https://api.github.com/search/repositories?q=language:${lang}&page=${page}&per_page=40`
      let data = await fetch(url)
      setProgress(60)
      let parsedData = await data.json()
      let data_items = parsedData.items
      setProgress(90)
      setData(data_items)
      setProgress(100)
      setLoading(false)
    }
  }
  const setLangFetch = async (e)=>{
    if(e.key === "Enter"){
      setLoading(true)
      setProgress(30)
      setPage(1)
      const curr = page;
      const url = `https://api.github.com/search/repositories?q=language:${lang}&page=${curr}&per_page=40`
      let data = await fetch(url)
      setProgress(60)
      let parsedData = await data.json()
      let data_items = parsedData.items
      console.log(data_items)
      setProgress(90)
      setData(data_items)
      setProgress(100)
      setLoading(false)
    }
  }
  const handleStars = async () =>{
      setLoading(true)
      setProgress(30)
      const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&page=${page}&per_page=40`
      setProgress(60)
      let data = await fetch(url)
      let parsedData = await data.json()
      let data_items = parsedData.items
      console.log(data_items)
      setProgress(90)
      setData(data_items)
      setProgress(100)
      setLoading(false)
  }
  const handleForks =async  ()=>{
      setLoading(true)
      setProgress(30)
      const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=forks&order=desc&page=${page}&per_page=40`
      setProgress(60)
      let data = await fetch(url)
      let parsedData = await data.json()
      let data_items = parsedData.items
      console.log(data_items)
      setProgress(90)
      setData(data_items)
      setProgress(100)
      setLoading(false)
  }
  return (
    <div className="relative">
      <div className="flex flex-col font-popins">
        <div className="w-screen h-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <p className="text-xs text-center text-white">Abhay bisht🌟</p>
        </div>
        <div className='flex justify-between py-2 px-10 border-2 border-gray-100 bg-gray-50 items-center'>
          <a href="https://github.com/AbHaY108BiShT"><AiFillGithub className="h-10 w-10"/></a>
          <p className="font-popins text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">Abhay Bisht</p>
        </div>
    </div>
    <LoadingBar height={3} color='#c1f76a' progress = {progress}/>
      <p className="text-center text-6xl my-10 font-black  font-inter">GitHub Stats</p>
      <div className="w-screen px-[290px] flex justify-between items-center  py-4 text-md">
        <button className={` ${page === 1?"cursor-not-allowed":"cursor-pointer"} py-2 px-4 bg-black text-white hover:bg-orange-500 hover:scale-110 duration-100 active:scale-95 rounded-full`} onClick={handlePrev}>Previous</button>
        <button className={` ${page >40?"cursor-not-allowed":"cursor-pointer"} py-2 px-4 bg-black text-white hover:bg-orange-500 hover:scale-110 duration-100 active:scale-95 rounded-full`} onClick={handleNext}>Next</button>
        <input type="text" value={lang} placeholder={lang} className="text-gray-600 outline-none text-lg bg-gray-100 py-2 px-4 rounded-full" onChange={(e)=> setLang(e.target.value)} onKeyPress={(e)=>setLangFetch(e)} onClick={()=>setLang("")}/>
        <button className="py-2 px-4 bg-black text-white hover:bg-orange-500 hover:scale-110 duration-100 active:scale-95 rounded-full" onClick={handleStars}>Sort By Stars</button>
        <button className="py-2 px-4 bg-black text-white hover:bg-orange-500 hover:scale-110 duration-100 active:scale-95 rounded-full" onClick={handleForks}>Sort By Forks</button>
      </div>
      {loading?<div className="w-screen h-full">
        <Spinner/>
      </div> :<div className="text-pink-600 grid grid-cols-2 gap-10 px-44 ">
        {data.map((ele , idx)=>(
          <Card key={idx} avatar={ele.owner.avatar_url} repo_name={ele.name} description={ele.description} language={ele.language} stargazers_count={ele.stargazers_count} name={ele.full_name} forks={ele.forks_count} profile_url={ele.html_url}/>
        ))}
      </div>
    }
    </div>
  );
}
export default App;