# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Orange: hsl(26, 100%, 55%)
- Pale orange: hsl(25, 100%, 94%)

### Neutral

- Very dark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700





    <nav className={`navbar bg-light fixed-top`}>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <FaBars/>
    </button>
    <a className="navbar-brand" href="#brand">sneakers</a>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#home">Collections</a>
          </li>
          <li Name="nav-item">
            <a className="nav-link" href="#men">Men</a>
          </li>
          <li Name="nav-item">
            <a className="nav-link" href="#women">Women</a>
          </li>
          <li Name="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li Name="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>    
        </ul>
       
      </div>
    </div>
  </div>
</nav>