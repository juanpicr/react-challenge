import { ReactNode } from 'react'

import { BreakingForm } from './components/BreakingForm'
import { BreakingName } from './components/BreakingName'

const App = (): ReactNode => {
  return (
    <section className="bg-gray flex flex-col gap-12 justify-center items-center h-dvh">
      <BreakingName />
      <BreakingForm />
    </section>
  )
}

export default App
