import { useSelector } from 'react-redux'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const { booksList } = useSelector((state) => state.reducer)
  return (
    <div className="App">
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-8 sm:px-1 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {booksList?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
