import React from 'react'
import "./Help.css"

export const Help = () => {
  return (

    <>
      <div className="z">
        <div className="z1">
          <div className="m1"><br />
            <div className="m1a">
              <h2>Help</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
            </div><br />
            <hr /><br />
            <div className="m1b">
              <img src="/src/assets/login_banner.svg" alt="" /><br />
              <p>For seamless booking management and</p>
              <p>customer support</p><br />
              <button><h3>Login to your account</h3></button>
            </div><br />
            <div className="m1c">
              <h3>Other topics</h3><br />
              <div className="m1c1">
                <div className="m1c1a">
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                  </svg></p>
                  <p>Browse other topics</p>
                </div>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg></p>

              </div>
            </div><br /><br />
          </div>
        </div>
        <div className="z2">
          <h1>Jayant's Travels Help</h1><br />
          <img src="/src/assets/rc_artboard.jpg" alt="" />
          <h1>24/7 Customer Support</h1>
        </div>
      </div><br /><br />
      <div className="nav5"><br /><br /><br />
        <div className="w1">
          <h4>Popular Bus Routes</h4>
          <form action="/action_page.php">

            <select name="bus_routes" id="bus">
              <option value="Delhi-to-Manali">Delhi-to-Manali</option>
              <option value="Delhi-to-Rishikesh-Bus">Delhi-to-Rishikesh-Bus</option>
              <option value="Delhi-to-Shimla-bus">Delhi-to-Shimla-bus</option>
              <option value="Delhi-to-Nainital-bus">Delhi-to-Nainital-bus</option>
              <option value="Delhi-to-Katra-bus">Delhi-to-Katra-bus</option>
              <option value="Banglore-to-Goa-bus">Banglore-to-Goa-bus</option>
              <option value="Banglore-to-Hyderabad-bus">Banglore-to-Hyderabad-bus</option>
              <option value="Banglore-to-Tirupati-bus">Banglore-to-Tirupati-bus</option>
              <option value="Banglore-to-Chenni-bus">Banglore-to-Chenni-bus</option>
              <option value="Banglore-to-Pondicherry-bus">Banglore-to-Pondicherry-bus</option>
            </select>
          </form>
        </div><br />
        <div className="hr1">
          <hr className='kl' />
        </div><br />
        <div className="w2">
          <h4>Popular Cities</h4>
          <form action="/action_page.php">

            <select name="bus_routes" id="bus">
              <option value="Delhi-bus-booking">Delhi-bus-booking</option>
              <option value="Rishikesh-bus-booking">Rishikesh-bus-booking</option>
              <option value="Shimla-bus-booking">Shimla-bus-booking</option>
              <option value="Nainital-bus-bookimg">Nainital-bus-booking</option>
              <option value="Katra-bus-booking">Katra-bus-booking</option>
              <option value="Goa-bus-booking">Goa-bus-booking</option>
              <option value="Hyderabad-bus-booking">Hyderabad-bus-booking</option>
              <option value="Tirupati-bus-booking">Tirupati-bus-booking</option>
              <option value="Chenni-bus-booking">Chenni-bus-booking</option>
              <option value="Banglore-bus-booking">Banglore-bus-booking</option>
            </select>
          </form>
        </div><br />
        <div className="hr1">
          <hr className='kl' />
        </div><br /><br />
        <div className="w3">
          <div className="s1">
            <h3>About Jayant's Travles</h3><br />
            <ul className='po'>
              <li>Contact us</li><br />
              <li>Sitemap</li><br />
              <li>offers</li><br />
              <li>Careers</li><br />
            </ul>
          </div>
          <div className="s2">
            <h3>Info</h3><br />
            <ul className='po'>
              <li>T&C</li><br />
              <li>Privacy policy</li><br />
              <li>Blog</li><br />
              <li>Bus operator registration</li><br />
              <li>Agent registration</li><br />
              <li>Insurance partner</li><br />
              <li>User agreement</li><br />
              <li>Primo bus</li><br />
              <li>Bus Timetable</li><br />
            </ul>
          </div>
          <div className="s3">
            <h3>Global Sites</h3><br />
            <ul className='po'>
              <li>India</li><br />
              <li>Singapore</li><br />
              <li>Malaysia</li><br />
              <li>Indonesia</li><br />
              <li>Peru</li><br />
              <li>Colombia</li><br />
              <li>Cambodia</li><br />
              <li>Vietnam</li><br />
            </ul>
          </div>
          <div className="s4">
            <h3>Our Partners</h3><br />
            <ul className='po'>
              <li>Goibibo bus</li><br />
              <li>Goibibo hotels</li><br />
              <li>Makemytrip Hotels</li><br />
            </ul>
          </div>
        </div><br /><br /><br />
        <div className="hr1">
          <hr className='kl' />
        </div><br /><br />
        <div className="w4">
          <div className="a11">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
            </svg> 2025 Jayant's Travles India Pvt Ltd. All rights reserved
          </div>
          <div className="a12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </div>
        </div><br />
      </div>
    </>
  )
}
export default Help