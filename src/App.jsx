import './assets/styles/App.css'
import Header from './components/Header'
import Label from './components/Label'
import Projects from './components/Projects'
import Nav from './components/Nav'

function App() {
    return (
        <div id="app">
            <Nav />
            <Header />
            <Label title={'WORK'} />
            <Projects />
            <Label title={'ABOUT'} />
        </div>
    )
}

export default App
