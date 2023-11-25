import './assets/styles/App.css'
import Header from './components/Header'
import Label from './components/Label'
import Projects from './components/Projects'

function App() {
    return (
        <div id="app">
            <Header />
            <Label title={'WORK'} />
            <Projects />
            <Label title={'ABOUT'} />
        </div>
    )
}

export default App
