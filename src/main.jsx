import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import Lenis
from "@studio-freight/lenis";

const lenis = new Lenis({

  duration: 2,

  lerp: 0.08,

  smoothWheel: true,

  wheelMultiplier: 0.8,

  infinite: false,

  touchMultiplier: 1.5,

  syncTouch: true,

  smoothTouch: true,
});

function raf(time) {

  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
