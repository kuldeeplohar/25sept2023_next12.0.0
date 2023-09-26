import React from 'react'

export default function Header() {
  return (
    <header>
       <nav className="nav float-end ">
         <a className="nav-link active" aria-current="page" href="#"><div class="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
            </div>
        </a>
         <a className="nav-link" href="#">We Are Hiring</a>
         <a className="nav-link" href="#">Investor Relaiton</a>         
         <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Advertise</a>
         <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Free Listing</a>
         <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Login/Sign up</a>
      </nav> 
    </header>
  )
}
