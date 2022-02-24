import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Transfer({ customers, customer }) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [receiverData, setreceiverData] = useState(null);
  const [senderData, setSenderData] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [amount, setAmount] = useState(0);
  const [senderUpdated, setSenderUpdated] = useState({
    email: "",
    currentBalance: 0,
  });
  const [receiver, setReceiver] = useState({
    email: "",
    currentBalance: 0,
  });

  function refreshPage() {
    window.location.reload(false);
  }

  function handleSelectChange(e) {
    setSelectedCustomer(e.target.value);
  }

  function handleAmountChange(e) {
    let money = e.target.value;
    if (money <= 0) {
      console.log("first");
      setDisabled(true);
    } else {
      if (money > customer.currentBalance) {
        console.log("second");
        setDisabled(true);
      } else {
        setAmount(e.target.value);
        setDisabled(false);
      }
    }
  }

  function getReceiverInfo() {
    let mySender = { ...senderUpdated };
    mySender.email = customer.email;
    mySender.currentBalance = customer.currentBalance - amount;
    let myReciever = { ...receiver };
    let valArr = selectedCustomer?.split(" ");
    myReciever.email = valArr[0];
    myReciever.currentBalance = Number(valArr[1]) + Number(amount);
    setSenderUpdated(mySender);
    setReceiver(myReciever);
  }

  useEffect(() => {
    getReceiverInfo();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCustomer, amount]);

  async function updateCustomer(customer, cb) {
    let { data } = await axios.patch(
      `https://basicbankingapi.herokuapp.com/customers`,
      customer
    );
    cb({ data }.data);
  }

  function submit() {
    updateCustomer(receiver, setreceiverData);
    updateCustomer(senderUpdated, setSenderData);
    setLoading(true);
    console.log(senderData);
    if (receiverData === null) {
      setLoading(false);
    } else {
      setLoading(false);
      refreshPage();
    }
  }

  return (
    <section
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog .modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Send Money
            </h5>
            <button
              type="button"
              className="bg-transparent btn-x border-0 text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-close fs-5" aria-hidden="true"></i>
            </button>
          </div>
          <div className="modal-body mt-4">
            <h4 className="text-center mt-3">
              The Current Balance of {customer?.name} is $
              {customer?.currentBalance}
            </h4>
            <form>
              <div className="receiver my-4 d-flex justify-content-between">
                <div>
                  <h6>Transfer To</h6>
                  <select
                    className="form-select"
                    id="receivers"
                    aria-label="select"
                    value={selectedCustomer}
                    onChange={handleSelectChange}
                  >
                    <option value={" "}> </option>
                    {customers
                      .filter((ele) => ele.email !== customer.email)
                      .map(({ name, email, currentBalance }, index) => {
                        return (
                          <option
                            key={index}
                            value={email + " " + currentBalance}
                            name="email"
                          >
                            {name} (${currentBalance})
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="ms-5 w-50">
                  <h6>Amount:</h6>
                  <input
                    className="form-control w-75"
                    type="Number"
                    onChange={handleAmountChange}
                    title="please enter number only"
                    name="amount"
                    value={amount}
                  />
                  <p className="fs-10 text-danger">
                    {amount <= 0 ? "the amount should be more than 0 and not more than sender's current balance" : ""}
                  </p>
                </div>
              </div>
              <div className="modal-footer px-0">
                <div className="d-flex flex-column">
                  <button
                    type="button"
                    onClick={submit}
                    className="btn"
                    disabled={disabled}
                  >
                    {loading ? (
                      <i
                        className="fas fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      "Confirm & Transfer"
                    )}
                  </button>
                  <p className="fs-10">Click twice to Confirm</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
