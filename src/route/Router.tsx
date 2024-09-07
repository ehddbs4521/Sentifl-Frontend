import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Create from "../pages/Create/Create";
import Home from "../pages/home/Home";
import AddInfo from "../pages/Login/AddInfo";
import Login from "../pages/Login/Login";
import LoginRedirect from "../pages/Login/LoginRedirect";
import MusicRecommend from "../pages/musicRecommend/MusicRecommend";
import BlogPost from "../pages/myblog/BlogPost/BlogPost";
import MyBlog from "../pages/myblog/MyBlog/MyBlog";
import NeighborBlog from "../pages/NeighborBlog/NeighborBlog";
import CreateSong from "../pages/SongCreator/CreateSong";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginRedirect />} />
        <Route path="/auth/add-info" element={<AddInfo />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/myblog" element={<MyBlog />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/musicrecommend" element={<MusicRecommend />} />
        <Route path="/neighborblog" element={<NeighborBlog />} />
        <Route path="/createsong" element={<CreateSong />} />
      </Route>
    </Routes>
  );
}

export default Router;
