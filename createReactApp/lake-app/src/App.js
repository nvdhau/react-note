import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const lakeLists = ["Echo", "Tahoe", "Maud"]

const LakeList = ({list}) => (
    <ul>
        {list.map(
            (lake, i) => <li key={i}>{lake} Lake</li>
        )}
    </ul>
)

const skiLists = [
    {id: 1, name: "Whistler", province: "BC" },
    {id: 2, name: "Grey Eagle", province: "Alberta" },
    {id: 3, name: "Rimrock", province: "Nova Scotia" }
]

const SkiList = ({list}) => (
    <ul>
        {list.map(skiResort => 
            <li key={skiResort.id}>{skiResort.name} in {skiResort.province}</li>
        )}
    </ul>
)

class App extends React.Component{
  state = {
      loggedIn: false
  }

  //event functions
  logIn = () => this.setState({loggedIn: true})
  logOut = () => this.setState({loggedIn: false})

  render(){
      return (//binding to the UI 2 buttons
          <div>
              <button onClick={this.logIn}>Login</button>
              <button onClick={this.logOut}>Logout</button>
              <div>The user is {this.state.loggedIn? 
                  "logged in" : 
                  "not logged in"}
              </div>

              {this.state.loggedIn? 
                  <LakeList list={lakeLists}/> :
                  <SkiList list ={skiLists}/>
              }
              
          </div>
      )
  }
}

export default App;
