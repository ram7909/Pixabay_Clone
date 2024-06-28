import React, { useEffect, useState } from 'react'

const PixabayData = () => {
    const [apiData, setApiData] = useState([])
    const [inputData, setInputData] = useState("paris")

    useEffect(() => {
      const fetchAPI = async() =>{
            const API_KEY = "44458093-48fceff343b86aafafdb290c9"
            const query = "shanghai"
            const api = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputData}&image_type=photo&pretty=true`);
            const data = await api.json();
            console.log("My Pixabay API Data",data.hits);
            setApiData(data.hits);
      }
      fetchAPI()
    }, [inputData])
    
  return (
    <>
        <div style={{textAlign:'center',margin:'20px'}}>
            <input value={inputData} type="text" placeholder='Search Here...' onChange={(e)=>setInputData(e.target.value)}/>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                {apiData.map((data) => <div key={data.id} style={{margin:'20px'}}>
                    <img src={data.largeImageURL} alt="" style={{width:"300px",borderRadius:'10px'}} />
                </div>)}
        </div>
    </>
  )
}

export default PixabayData