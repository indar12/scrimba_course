import useWindowWidth from './components/useWindowWidth';


function App() {
  const width = useWindowWidth();
  return (
    <>
      <h2>Width: {width}</h2>
    </>
  )
}

export default App
