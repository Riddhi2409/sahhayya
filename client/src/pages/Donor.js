import React from 'react'
// import {useState} from 'react'
import NavDonor from '../components/NavDonor'
import { Routes,Route } from 'react-router-dom'
// import AgentPage from '../components/DonorForm/AgentPage'
import PastDonations from '../components/DonorForm/pastDonations'
import FoodDetails from '../components/DonorForm/FoodDetails'
import AgentPage2 from '../components/DonorForm/AgentPage2'
import { useState } from 'react'
function Donor() {
  const [showForm,setShowForm] = useState(true)
  return (
    <div>
      <NavDonor setShowForm={setShowForm}/>
      {showForm ? <FoodDetails /> : <PastDonations />}
      {/* <FoodDetails /> */}
      {/* <PastDonations />       */}
      {/* <AgentPage2 /> */}
    </div>
  )
}

export default Donor