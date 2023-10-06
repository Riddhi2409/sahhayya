import React, { useEffect } from 'react'
import DropAndPick from '../components/DropAndPick';
import Carausel from '../components/Carausel'
import Footerbar from '../components/Footerbar';
import { useUserAuth } from '../store/userAuth';
import Donor from './Donor';
import Navigation from '../components/Navigation';

function Home() {
  const {user,isAuthen,person} = useUserAuth();

  
  useEffect(()=>{
    console.log(user,isAuthen,person)
  },[user,isAuthen,person])

  
  return (
    <div>
      <Navigation />
        <div className="h-[80vh]">
        <Carausel />
      </div>

      <div className="flex flex-col justify-center items-center my-4 mt-10">
        <div className="flex flex-col font-bold items-center gap-4">
          <h2 class="headingText problem-mobilealignment text-xl">The Problem</h2>
          <h3 class="items-center text-lg">
            The challenge is not a lack of food — it is making food consistently
            available to everyone who needs it.
          </h3>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center m-4 mt-5">
        <div class="flex flex-col gap-2 items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tC3ZbCDytwkgeumHajP68Xb87zs7kk7umA&usqp=CAU" className="rounded-full w-[15em] h-[15em]"/>
            <h3 class="text-center w-[60%]">
              Every 10 sec, a child dies from hunger
            </h3>
          </div>
          <div class="flex flex-col gap-2 items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgYm-ZuoNp7qiRw03WdUug2hEfDjAFRvjKC8PuqiwZTc83VCBSLg-cwfq1QoU70jYCqM&usqp=CAU" className="rounded-full w-[15em] h-[15em]"/>
            <h3 class="text-center w-[60%]">
              Hunger kills more people each year than AIDS, malaria and
              terrorism combined
            </h3>
          </div>
          <div class="flex flex-col gap-2 items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uT0AghWFGjkygBp9rDmu9NoyfoHNTqfU9g&usqp=CAU" className="rounded-full w-[15em] h-[15em]"/>
            <h3 class="text-center w-[60%]">
              one-third of the food produced is wasted each year
            </h3>
          </div>
        </div>
      </div>
      <DropAndPick />
      <Footerbar />
    </div>
  )
}

export default Home