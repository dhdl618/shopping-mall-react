// 1. 전체상품페이지, 로그인페이지, 상품상세페이지 필요
// 2. 전체상품페이지에서는 전체 아이템을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인페이지가 나온다.
// 4. 상품상세페이지를 눌렀으나 로그인이 안되어있으면 로그인페이지가 나온다.
// 5. 로그인이 되어있으면 상품상세페이지를 볼 수 있다.
// 6. 상품상세페이지에서 로그아웃을 누르면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품상세페이지에서 로그인페이지로 바뀐다.
// 8. 로그인 - 로그아웃 이 화면에 뜬다.
// 9. 상품을 검색할 수 있다. (쿼리)
import './App.css';
import {Route, Routes} from 'react-router-dom';
import ProductAllPage from './page/ProductAllPage'
import LoginPage from './page/LoginPage';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import PrivateRoute from './route/PrivateRoute';


function App() {
  const [auth, setAuth] = useState(false)
  useEffect(()=>{
    console.log("바뀜")
  },[auth])
  return (
    <div>
      <Navbar auth={auth} setAuth={setAuth}/>
      <Routes>
        <Route path='/' element={<ProductAllPage />} />
        <Route path='/login' element={<LoginPage  setAuth={setAuth} />} />
        <Route path='/product/:id' element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
