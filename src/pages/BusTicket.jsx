import React from 'react'
import '../Css/travalstory.css'

function BusTicket() {
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="row justify-content-sm-center my-5">
            <h2 className="text-center pt-3 text-secondary h2">Book Bus Tickets</h2>
            <hr />
            <form>
              <div>
                <input type='search' className='form' placeholder='From' required
                  style={{ margin: '20px', outline: 'none', width: '30%', height: '40px' }} />
                &nbsp;&nbsp;
                <input type='search' className='form' placeholder='To' required
                  style={{ margin: '20px', outline: 'none', width: '30%', height: '40px' }} />
                &nbsp;&nbsp;
                <input type='date' className='form'
                  style={{ margin: '20px', outline: 'none', width: '20%', height: '40px' }} />
                &nbsp;&nbsp;
                <button className='btn btn-outline-primary'>search</button>
              </div>
            </form>
            <h3>Traval Stories</h3>
            <hr />
            <p className='p1'>
              <h3>Online Bus Booking Services</h3>
              AbhiBus is India`s leading online bus ticket booking service provider. Check out budget friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.
              AbhiBus has simplified the online bus booking process for your travel planning. In case you need to cancel the ticket or change the dates, You can save both time and money by choosing AbhiCash as a refund option which can be used instantly. Book now!!!
              Browse through all your bus route options, and use our advanced smart filters to ensure a reliable and comfortable journey, tailored to your scheduled travel plans.
            </p>
            <p className='p1'>
              <h3>Online Bus Ticket Booking at Lowest Price</h3>
              With AbhiBus, travellers can book bus tickets online at the lowest ticket fares. Travellers can choose their favorite bus for online bus booking. AbhiBus is the right place for reserving bus tickets as you will find a wide range of Private buses and SRTC (State Road Transport Corporation) buses are available for bus booking online on AbhiBus.
              Below, you will find various types of buses available to book bus tickets on AbhiBus at the lowest fare for bus ticket booking:
              <ul>
                <li> AC Buses</li>
                <li> Non AC Buses</li>
                <li>Ordinary Buses</li>
                <li>Super Luxury (Non-AC Seater)</li>
                <li>Volvo AC Buses</li>
                <li> Sleeper AC Buses</li>
                <li> Sleeper Cum Seater AC</li>
              </ul>
              The bus ticket fare depends on the factors such as type of bus, bus operator, bus routes distance between origin and destination cities, amenities offered by the bus operator, and bus operators may change ticket prices during festive seasons.
              Travelling by bus journey is the best option, cost effective and the most convenient travel option compared to other modes of transport.
            </p>
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Q. How do you do online bus reservation on AbhiBus?
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from (Origin City) -- Going to (destination city) details along with the date you wish to travel in the bus search option on the site.
                    Within seconds you will be given a list of available running buses for your route. Select the bus that best suits you, then just follow the bus ticket booking process by selecting your seat, providing passenger details and
                    completing the payment process. Upon successful booking confirmation, you will receive an e-ticket over SMS/whatsapp and email.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Q. Do I need to create an account to book bus tickets on AbhiBus?
                    </button>
                  </h5>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    Ans: No, you can book bus tickets as a guest user by providing required passenger details. However, we recommend you to create an account so that you get the latest information about bus availability,
                    ticket details and other features which will help you book faster during future transactions.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Q. How to sign-up AbhiBus?
                    </button>
                  </h5>
                </div>

                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                  Ans: You can sign-up using your mobile number. AbhiBus offers a one-step sign-up & login process with just an OTP received on your mobile.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default BusTicket
