
import Main from '../Main/Main'
import Top from '../Top/Top'

export default function MainLayout ({children}) {
  return <div>
      <Top />
      <Main />
  {children}
  </div>
}