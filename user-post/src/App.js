import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import {skills, projects} from './assets/db.json';
import './App.css';

export const FontContext = React.createContext();

const fonts = ['Arimo','Josefin Sans', 'Roboto Mono', 'Lobster', 'Cairo', 'Kdam Thmor', 'Abril Fatface', 'Architects Daughter', 'Carter One', 'Chivo', 'Cinzel', 'Goblin One', 'Homemade Apple', 'Kalam', 'Kdam Thmor', 'Lato', 'Lemonada', 'Martel Sans', 'Merriweather', 'Monda', 'Monoton', 'Oswald', 'Overpass Mono', 'Oxygen', 'Passion One', 'Press Start 2P', 'PT Serif', 'Reggae One', 'Rufina', 'Satisfy', 'Sawarabi Gothic', 'Spectral'];

function App() {

  const [contentType, setContentType] = useState('posts');
  const [items, setItems] = useState([]);
  const [fontTheme, setFontTheme] = useState(true);
 
  const [selectedFontIndex, setFontIndex] = useState(0);

  const fontStyles = {
    backgroundColor: fontTheme ? '#333' : '#CCC',
    color: fontTheme ? '#021965' : '#666',
    fontFamily: fonts[selectedFontIndex],
    padding: '2rem',
    margin: '2rem',
  }

  const staticStyles = {
    backgroundColor: fontTheme ? '#333' : '#CCC',
    color: fontTheme ? '#021965' : '#666',
    fontFamily: fonts[selectedFontIndex],
  }

  console.log(skills);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [contentType])

  const toggleFont = () => {
    setFontTheme(prevFontTheme => !prevFontTheme)
    
    const newFontIndex = selectedFontIndex + 1;
    if (fonts[newFontIndex]) 
        setFontIndex(newFontIndex);
    else
        setFontIndex(0);
  }

  return (
    <>
          <div className='container'>
          <div className='row mt-2 sticky'>
              <div className="col">
                <Button className='btn btn-dark' onClick={toggleFont}>CHANGE FONT</Button>
              </div>
            </div>
          <hr /> 
            <div className="body">
            <FontContext.Provider value={fontTheme}>  
            <div className='row mt-2'>
              <div class="btn-group" role="group" aria-label="Basic example">
                <Button className='btn btn-primary' onClick={() => setContentType('Posts')}>myPosts</Button>
                <Button className='btn btn-primary' onClick={() => setContentType('Users')}>myUsers</Button>
                <Button className='btn btn-primary'  onClick={() => setContentType('Comments')}>myComments</Button>
              </div>
            </div>
            <div className='row mt-1'>
              <div className="col">
                <h1 className="header">{contentType}</h1>
                  <div style={fontStyles}>
                    {
                        items.map(item => {
                          if(contentType == 'Comments'){
                            return (
                              <div className="card" >
                                <h5 className="card-title">{JSON.stringify(item.name)}</h5>
                                <div><label>PostID:</label>{JSON.stringify(item.postId)}</div>
                                <div><label>Email:</label>{JSON.stringify(item.email)}</div>
                                <div><label>Content:</label>{JSON.stringify(item.body)}</div>
                              </div>
                            )  
                          }else if(contentType == 'Users'){
                            return (
                              <div className="card" >
                                <h5 className="card-title">{JSON.stringify(item.name)}</h5>
                                <div><label>Username:</label>{JSON.stringify(item.username)}</div>
                                <div><label>Email:</label>{JSON.stringify(item.email)}</div>
                                <div><label>Phone:</label>{JSON.stringify(item.phone)}</div>
                                <div><label>Username:</label>{JSON.stringify(item.username)}</div>
                                <div><label>Website:</label>{JSON.stringify(item.website)}</div>
                              </div>
                            )                                
                          }else{
                            return(
                              <div className="card" >
                                <h5 className="card-title">{JSON.stringify(item.title)}</h5>
                                <div><label>UserID: </label>{JSON.stringify(item.userId)}</div>
                                <div>
                                  <table>
                                    <tr>
                                      <th>Content: </th>
                                    </tr>
                                    <tr>
                                      <td>{JSON.stringify(item.body)}</td>
                                    </tr>
                                  </table>
                                </div>
                                <div className="card-text">
                                  <label>Content: </label>{JSON.stringify(item.body)}</div>
                              </div>
                            )
                          }
                        })
                    }          
                  </div>
              </div>
            </div>            
            </FontContext.Provider>
            </div>
          </div>
    </>
  );
}

export default App;
