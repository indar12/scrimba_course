import InputField from "./components/InputField"

function App() {
  return (
    <>
      <InputField label={'First Name'}/>
      <InputField label={'Last Name'}/>
      <InputField label={'Email'} type="email" />
    </>
  )
}

export default App
