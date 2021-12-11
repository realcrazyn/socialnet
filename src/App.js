import './App.css'
import { Profile } from './components/Profile/Profile'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Dialogs } from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'
import { News } from './components/News/News'
import { Settings } from './components/Settings/Settings'

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                state={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
