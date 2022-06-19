import React from 'react'
import { useEffect,useState } from 'react'

const SubTitle = () => {
    const [subTitleList,setSubTitleList] = useState([]);
    const getSubTitle = async()=>{
        let url = `http://localhost:3004/title `;
        let response = await fetch(url);
        let data = await response.json();
        setSubTitleList(data)
    }

    useEffect(()=>{
        getSubTitle();
    },[])

  return (
    <div className='sub_title_wrap'>
        <div className='sub_img'>
            <img src="https://www.maisonmargiela.com/cloud/margielawp/uploads/2022/05/cp_mm_newarrivals_men__May13_dk.jpg?impolicy=margiela-modulePlpMainModule&imdensity=1&imwidth=1832" alt="" style={{width:"60vw",height:"50vh"}}/>
        </div>
        <div className='sub_ex'>
            신제품
        </div>
    </div>
  )
}

export default SubTitle