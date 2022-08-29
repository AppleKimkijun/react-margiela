import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch,faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom';

const NavBar = ({authenticate,setAuthenticate}) => {
  const logOut = () =>{
    setAuthenticate(false);
    navigate('/')
  }


  const navigate = useNavigate();
  const goToLogin = ()=>{
    navigate("/login");
  }
  const goToHome = ()=>{
    navigate('/')
  }

  const goToFeMale = () =>{
    navigate('/newProductFeMale')
  }
  const goToMale = () =>{
    navigate('/newProductMale')
  }
  const goToMM = () =>{
    navigate('/newProductMM')
  }

  const [menuOpen,setMenuOpen] = useState(false);
  const menu = ()=>{setMenuOpen(menuOpen => !menuOpen)}

  const [searchOpen,setSearchOpen] = useState(false);
  const search = ()=>{setSearchOpen(searchOpen=> !searchOpen)}

  const searchEnter = (event) =>{
    if(event.key === "Enter"){
      //입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value

      navigate(`/productsAll?q=${keyword}`)
    }
  }

  return (
    <div className='nav_bar_wrap'>
      <div className={`menu_list ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={()=>{
            goToFeMale();
            menu();
          }}>여성복</li>
          <li onClick={()=>{
            goToMale();
            menu();
          }}>남성복</li>
          <li onClick={()=>{
            goToMM();
            menu();
          }}>MM</li>
        </ul>
      </div>

      <div className={`search_list ${searchOpen ? 'active' : ''}`}>
        <div className="search_info">
          <div className="exit_icon" onClick={search}></div>
          <div>Search</div>
        </div>
        
        <div className="search_wrap">
         <div>Search</div> 
         <div className="input_wrap">
          <input type="text" placeholder="ex) 티셔츠,가방,바지" onKeyPress={(event)=>{
            if(event.key === "Enter"){
              searchEnter(event);search(event);
            }
          }}/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9T8Ba-n6sBjpK1IoD2i3AZO9BOL6vzuLt2A&usqp=CAU' style={{width:"16px",marginRight:"10px"}}></img>
         </div>
        </div>  
      </div>

        <div className="nav_l">
            <div className={`nav_menu ${menuOpen ? 'active' : ''}`} style={{cursor:"pointer"}} onClick={menu}><div className='menu_icon'></div>Menu</div>
            <div style={{cursor:"pointer"}} className={`nav_search ${searchOpen ? 'active' : ''}`} onClick={search}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9T8Ba-n6sBjpK1IoD2i3AZO9BOL6vzuLt2A&usqp=CAU' style={{width:"20px",marginRight:"10px"}}></img>Search</div>
        </div>
        <img src="https://cdn.mustit.co.kr/lib/upload/community/2020/01/1578548001-8.png" alt="logo" onClick={goToHome} style={{cursor:"pointer"}}/>
        <div className="nav_r">
            <div style={{cursor:"pointer"}} onClick={goToLogin}><FontAwesomeIcon icon={faUser} style={{marginRight : "10px"}}/>{authenticate == true?<div style={{marginLeft:"2px"}} onClick={logOut}>Sign Out</div>:"Sign in"}</div>
            <div style={{cursor:"pointer"}}><FontAwesomeIcon icon={faShoppingBag} style={{marginRight : "10px"}}/>0</div>
        </div>
    </div>
  )
}

export default NavBar