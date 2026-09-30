import { useNavigate } from 'react-router-dom'
import envelopeOpenImg from '../assets/images/envelope_open.png'
import cardImg from '../assets/images/card.jpg'
import flowersImg from '../assets/images/flowers2.png'
import arrowImg from '../assets/images/arrow.svg'

export function InvitationPage() {
  const navigate = useNavigate()

  return (
    <main className="invitation-shell">
      <section
        style={{ maxHeight: '400px' }}
        aria-labelledby="invitation-title"
      >
        <div
          style={{
            transform: 'rotate(-3.325deg)',
            paddingTop: '2rem',
            width: '800px',
          }}
        >
          <img
            style={{ width: 'inherit' }}
            src={envelopeOpenImg}
            alt="Envelope"
          />
        </div>
        <div
          style={{
            position: 'relative',
            transform: 'translate(2.5rem, -62rem)',
            width: '750px',
          }}
        >
          <img style={{ width: 'inherit' }} src={cardImg} alt="Card" />
        </div>
        <div
          style={{
            position: 'relative',
            transform: 'translate(-7rem, -82.5rem) scaleY(1) rotate(-15deg)',
            width: '200px',
          }}
        >
          <img style={{ width: 'inherit' }} src={flowersImg} alt="Flowers" />
        </div>
        <div
          style={{
            transform: 'translate(50rem, -130rem) rotate(50deg)',
            position: 'relative',
            width: '150px',
          }}
        >
          <img style={{ width: 'inherit' }} src={arrowImg} alt="Arrow" />
        </div>
      </section>
    </main>
  )
}
