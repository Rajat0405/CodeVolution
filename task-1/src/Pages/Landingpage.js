import React from 'react';
import '../style.css'


// make button as component



const App = () => {
  const divbtn = [
    'Solution', 'Features', 'Learn', 'Marketplace',
    'Pricing', 'Customers', 'Partner', 'Log In'
  ];
 
  const sidebtn = ['See Demo', 'Get Started'];
 
  const Modal = [
    { id: 1, title: 'Intuitive Admin Interface', content: 'So easy to use, so easy to customize. You are going to love this content you build better with ButterCMS' },
    { id: 2, title: 'Handy Integration With React.js', content: 'Our React CMS has a simple content API and drop-in React SDK that makes the magic happen in minutes not hours' },
    { id: 3, title: 'A truly zero-maintanance solution', content: 'With ButterCMS, you will never worry about security upgrades, hosting and performance again' },
  ];

  const logos = [
    'https://img.icons8.com/cotton/128/folder-invoices--v1.png', 
    'https://img.icons8.com/ios/50/cms.png',
    'https://img.icons8.com/ios/50/apple-settings.png',  // make it into modals
  ];
 
  return (
    <div>
      <header>
        <div className="logo">
          <h3 id="logo" style={{ color: 'white', margin: '20px' }}>ButterCMS</h3>
        </div>
        <nav className="nav">
          {divbtn.map((name, index) => (
            <button key={index} className="nav-btn" type="button" >
              {name}
            </button>
          ))}
          {sidebtn.map((name, index) => (
            <button style={{backgroundColor: index === 0 ? 'grey' : index === 1 ? 'rgb(255, 222, 89)': null}}
             key={index} className="side-btn" type="button" >
              {name}
            </button>
          ))}
        </nav>
      </header>
      <div className='middle-div' style={{ display: 'flex', alignItems: 'center', color: 'white', background: 'black'}}>
        <h1 style={{ textAlign: 'center' }}>A React CMS like no other</h1>
        <h3 style={{ textAlign: 'center' }}>Meet the headless React CMS that integrates with your application using a straightforward API. Smooth, simple, and tasty content integration -- that's Butter.</h3>
        <button className="middle-btn" type="button" >Get Started For Free</button>
      </div>

      
     
      <div className="modal">
      {Modal.map((card, index) => (
        <div className="cards" key={card.id}>
          <img 
           src={logos[index]}
            alt="Logo" 
            className="card-logo"
            
          />
          <h2 style={{fontSize:"small"}}>{card.title}</h2>
          <p>{card.content}</p>
        </div> /// make it component
        ))}
      </div>
    </div>
  );
};
 
export default App;