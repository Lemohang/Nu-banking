"use client"
import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
  const loggedIn = {firstName: 'Makintane', lastName: 'Makintane', email: 'makintane@gmail.',$id: '',};
  return (
    <section className="home">
      <div className="home-content">
       <header className="home-header">
        <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transactions efficiently."

        
        />
        <TotalBalanceBox
        accounts = {[]}
        totalBanks = {2}
        totalCurrentBalance = {3750}
        
        
        />
        
       </header> 


        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ },{ }]}
      />
    </section>
  )
}

export default Home