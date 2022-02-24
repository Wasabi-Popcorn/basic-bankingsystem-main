import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerImg from "../../Assets/images/bank.jpg";

export default function Home() {
  const navigate = useNavigate();

  function toCustomersPg() {
    navigate('/customers');
  }
  return (
    <header className='py-5 d-flex flex-column flex-lg-row justify-content-between align-items-center vh-100'>
      <div className='header-content py-5 py-lg-0 me-lg-5 w-lg-50 text-center text-lg-start'>
        <h1>Transfer Money Became Easy</h1>
        <p className='my-4'>send money from any place in the world anytime.</p>
        <button onClick={toCustomersPg} className='btn'>View All customers</button>
      </div>
      <div className="header-img text-end w-100">
      <img className='animate w-100' src={headerImg} alt="" />
      </div>
    </header>
  )
}
