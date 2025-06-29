import SplashCursor from './Animations/SplashCursor/SplashCursor'
import './App.css'
import CircularGallery from './Components/CircularGallery/CircularGallery'
import TrueFocus from './TextAnimations/TrueFocus/TrueFocus'

function App() {
  return (
    <>
      <div className="card">
        <TrueFocus 
          sentence="Analista de Sistemas / Desarrollo de Software"
          manualMode={false}
          blurAmount={3}
          borderColor="blue"
          animationDuration={5}
          pauseBetweenAnimations={1}
        />

        <SplashCursor
        />

        
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>

      </div>
    </>
  )
}

export default App
