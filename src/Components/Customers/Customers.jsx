import axios from "axios";
import React, { useEffect, useState } from "react";
import Transfer from "../Transfer/Transfer";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({
    index:0,
    name:'',
    email:'',
    currentBalance:0,
  });

  async function getCustomers() {
    let { data } = await axios.get(
      `https://basicbankingapi.herokuapp.com/customers`
    );
    setCustomers({ data }.data.data);
  }

  function clickedCustomer(index, name, email, currentBalance) {
    setCustomer({index, name, email, currentBalance});
  }


  useEffect(() => {
    getCustomers();
  }, []);




  return (
    <main className="Customers py-5">
      <section className="py-5 text-center">
        <h1>ACCOUNTS LIST</h1>
        <table className="table table-hover my-5">
          <thead className="table-dark">
            <tr>
              <th> </th>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {customers.map(({ name, email, currentBalance }, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>${currentBalance}</td>
                  <td>
                    <button
                      type="button"
                      className="btn my-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={()=>clickedCustomer(index,name,email,currentBalance)}
                    >
                      Send Money
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {<Transfer customers={customers} customer={customer}/>}
    </main>
  );
}
