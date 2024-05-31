import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Login from './Login'
import Movies from './Movies'
import Music from './Music'
import Wishlist from './Wishlist'
import Payment from './Payment'
import PremiumPlan from './PremiumPlan'
import Register from './Register'
import VideoPlayerPage from '../Components/Slider/VideoPlayerPage'
import SearchPage from './SearchPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/music" element={<Music/>}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/videoplayer/:id" element={<VideoPlayerPage/>}></Route>
        <Route path="/searchpage/:title/:search" element={<SearchPage/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/premiumplan" element={<PremiumPlan />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  )
}
