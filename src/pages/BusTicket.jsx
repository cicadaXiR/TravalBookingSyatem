import React from 'react'
import '../Css/travalstory.css'

function BusTicket() {
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="row justify-content-sm-center my-5">
            <h2 className="text-center pt-3 text-secondary h2">Book Bus</h2>
            <hr />
            <form>
              <div className='form-group'>
                <input type='search' className='form' placeholder='from' required />
                <input type='search' className='form' placeholder='to' required />
                <input type='date' className='form' />
                <button className='btn btn-primary'>search</button>
              </div>
            </form>
            <h2>Traval Stories</h2>
            <hr />
            <p className='p1'>
              <h3>Online Bus Booking Services</h3>
              AbhiBus is India`s leading online bus ticket booking service provider. Check out budget friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.
              AbhiBus has simplified the online bus booking process for your travel planning. In case you need to cancel the ticket or change the dates, You can save both time and money by choosing AbhiCash as a refund option which can be used instantly. Book now!!!
              Browse through all your bus route options, and use our advanced smart filters to ensure a reliable and comfortable journey, tailored to your scheduled travel plans.
            </p>
          </div>
        </div>
      </div >
    </>
  )
}

export default BusTicket
