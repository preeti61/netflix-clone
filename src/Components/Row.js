import axios from '../Components/axios'
import React,{useEffect, useState} from 'react'
import '../Styles/Row.scss';
export default function Row(props) {

    const [showList,setshowList]=useState([])
    useEffect(() => {
        const fetchD=async()=>{
            const request =await axios.get(`${props.fetchD}`);
            setshowList(request.data.results)
           

        }
        fetchD()
    }, [props.fetchD])
    return (
        <div className={`category_row  && ${props.islarge&&"islargerow"}`}>
            <h1 style={{marginLeft:"20px", marginBottom:"20px"}}>{props.title}</h1>
            <div className="row_contents">
            {
                showList?.map((movie)=>movie?(
                
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} key={movie.id} className={`row_poster ${props.islarge &&"islarge"} `} alt={movie.name}/>
                ):(undefined))
            }
            </div>
           
        </div>
    )
}
