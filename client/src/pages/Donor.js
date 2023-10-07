import React from 'react'
// import {useState} from 'react'
import NavDonor from '../components/NavDonor'
import { Routes,Route } from 'react-router-dom'
// import AgentPage from '../components/DonorForm/AgentPage'
import PastDonations from '../components/DonorForm/PastDonations'
import FoodDetails from '../components/DonorForm/FoodDetails'
import { useState } from 'react'
function Donor() {
  const [showForm,setShowForm] = useState(true)
  return (
    <div>
      <NavDonor setShowForm={setShowForm}/>
      {showForm ? <FoodDetails /> : <PastDonations />}
      
    </div>
  )
}

export default Donor