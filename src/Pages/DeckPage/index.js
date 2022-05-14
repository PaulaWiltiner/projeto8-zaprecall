import FlashCards from '../../components/FlashCards'
import Top from '../../components/Top'
import Footer from '../../components/Footer'
import './DeckPage.css'

export default function DeckPage() {

  return(
      <div className='deck'>
        <Top />
        <FlashCards />
        <Footer />
      </div>
  )
} 