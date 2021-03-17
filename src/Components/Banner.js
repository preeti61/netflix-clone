import React,{useState,useEffect} from 'react'
import '../Styles/Banner.scss';
import img from '../assets/netflix-banner.jpg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from '../Components/axios';
import InfoIcon from '@material-ui/icons/Info';
import requests from './request';
function Banner() {
     
    const [movie, setmovie] = useState([]);
    useEffect(() => {
       const fetchD= async()=>{
          const request= await axios.get(requests.fetchNetflixOriginals);
          setmovie(request.data.results[Math.floor(Math.random()*(request.data.results.length-1))]);
         
          return request;
        }
      fetchD();
      console.log(movie)
    }, [])
    
    const truncate=(s,n)=>{
          if(s)
          return s.length>n?s.substr(0,n) + '...':s;
          else
          return s;
    }
    return (
        <div className="banner" style={{backgroundPosition:"center center"} }>
            <img src={movie.length===0?img:`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} width="100%" height="100%"/>
            <div className="banner-contents">
                <h1>{movie.length===0?"Movie Name":movie.original_name}</h1>
                <div className="banner-buttons">
                <button style={{marginRight:"15px"}}>Play<ArrowRightIcon/></button>
              <button style={{background:"rgba(133, 132, 130,0.7)",color:"#ffffff"}}><InfoIcon/>More Info</button>
                </div>
             
              <div className="banner-description">
                   {truncate(movie?.overview,300)}
             </div>
            </div>
        </div>

    )
}

export default Banner
