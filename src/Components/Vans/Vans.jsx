import { useState } from "react"
import data from "../../data"
import Class from './vans.module.css'
import { Link } from "react-router";
export default function Vans(){

    const [selectedFilter , setSelectedFilter] = useState("");
    function handleTabClick(getIndex){

    }

    const mappedVans = data.map(item =>{
        const vanType = item.type;
        const Style = {
            backgroundColor: vanType == "simple"?" #E17654": vanType == "rugged"?"#115E59":"#161616",
            color:"white",
            padding:"1rem",
            width:"5.357rem",
            height:"2.118rem",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"0.313rem"
           }
        return(
           selectedFilter == vanType ?
           <Link to={`/vans/${item.id}`}key={item.id}>
            <div  className={`${Class.cardContainer}`}>
                <div className={`${Class.imageDiv}`}>
                    <img src={item.imageUrl} style={{width:'100%' , borderRadius:'0.313rem'}}/>
                </div>
                <div className={`${Class.cardBottomInfo1}`}>
                    <h3 style={{textDecoration:'none'}}>{item.name}</h3>
                    <h3 style={{textDecoration:'none'}}>${item.price} <br/><span style={{fontSize:'0.875rem'}}>/day</span></h3>
                </div>
                <div style={Style}>{item.type}</div>

            </div>
            </Link>
            : selectedFilter == "" ?
            <Link to={`/vans/${item.id}`}  key={item.id}>
            <div className={`${Class.cardContainer}`}>
            <div className={`${Class.imageDiv}`}>
                <img src={item.imageUrl} style={{width:'100%' , borderRadius:'0.313rem'}}/>
            </div>
            <div className={`${Class.cardBottomInfo1}`}>
                <h3 style={{textDecoration:'none'}}>{item.name}</h3>
                <h3 style={{textDecoration:'none'}}>${item.price} <br/><span style={{fontSize:'0.875rem'}}>/day</span></h3>
            </div>
            <div style={Style}>{item.type}</div>

        </div>
       </Link>

        :null
           
        )
    })
    return(
        <div className={`${Class.vansContainer}`}>
            <h1>Explore our van options</h1>
            <div className={`${Class.filtersMainDiv}`}>
                <div style={{backgroundColor:selectedFilter == "simple" ?'#fdb864' : null}} className={`${Class.filterUnit}`} onClick={()=>setSelectedFilter("simple")}>
                    Simple
                </div>
                <div style={{backgroundColor:selectedFilter == "luxury" ?'#fdb864' : null}} className={`${Class.filterUnit}`} onClick={()=>setSelectedFilter("luxury")}>
                    Luxury
                </div>
                <div style={{backgroundColor:selectedFilter == "rugged" ?'#fdb864' : null}} className={`${Class.filterUnit}`} onClick={()=>setSelectedFilter("rugged")}>
                    Rugged
                </div>
                <p className={`${Class.clearFilter}`} onClick={()=>setSelectedFilter("")}>
                    Clear Filter
                </p>
            </div>
            <div className={`${Class.mainCardContainer}`}>
           {mappedVans}
           </div>
        </div>
    )
}