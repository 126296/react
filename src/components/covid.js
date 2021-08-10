
import React,{useEffect,useState} from 'react'

const Covid = ()=>
{
    const [data,setData] = useState([]);
   const getCovidData=async()=>{

    try{
        const res =await fetch('https://api.covid19india.org/data.json');
        const actualData=await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);

    }
    catch(err)
    {
        console.log(err);
    }
       
    }

    useEffect(()=>{
        getCovidData();
    },[]);

  return(
    
  <>

   
      <center><h1  style={{background:"#C0C0C0",color:"red"}}>Live Covid19 Cases Tracker in India</h1></center>
      
     <center> <div class="container">
      <div class="row">
    <div class="col">
          <div className="card" style={{background:"#dc143c",color:"#191970",fontStyle:'italic',fontSize:'20px',width:"200px",height:"100px"}}>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>Our</span>Country</p>
                        <p className="card__name card__small">India</p>
                    </div>

                </div>
          </div>
          </div>

          <div class="col">
          <div className="card"  style={{background:"#b8860b",color:"#191970",fontStyle:'italic',fontSize:'20px',width:"200px",height:"100px"}}>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>Total</span>Recoverd</p>
                        <p className="card__name card__small">{data.recovered}</p>
                    </div>

                </div>
          </div>

</div>
          
    <div class="col">
          <div className="card"  style={{background:"#ff8c00",color:"#191970",fontStyle:'italic',fontSize:'20px',width:"200px",height:"100px"}}>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>Total</span>Confirmed</p>
                        <p className="card__name card__small">{data.confirmed}</p>
                    </div>

                </div>
          </div>
</div>
</div>
          <div class="row">
    <div class="col-sm">
          <div className="card"  style={{background:"greenyellow",color:"#191970",fontStyle:'italic',fontSize:'20px',width:"200px",height:"100px"}}>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>Total</span>Active</p>
                        <p className="card__name card__small">{data.active}</p>
                    </div>

                </div>
          </div>
</div>

          
    <div class="col-sm">
          <div className="card"  style={{background:"#ba55d3",color:"#191970",fontStyle:'italic',fontSize:'20px',width:"200px",height:"100px"}}>
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>Total</span>Deth</p>
                        <p className="card__name card__small">{data.deaths}</p>
                    </div>

                </div>
          </div>
</div>
          
    <div class="col-sm">
          <div className="card" style={{background:"#d2691e",color:"#191970",fontStyle:'italic',fontSize:'20px',width:"200px",height:"100px"}} >
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>last</span>Updated</p>
                        <p className="card__name card__small">{data.lastupdatedtime}</p>
                    </div>

                </div>
          </div>

         </div>
         </div>
         
</div></center>
  </>
  )
}

export default Covid