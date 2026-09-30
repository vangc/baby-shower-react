import { useNavigate } from 'react-router-dom'
import { Text } from '@fluentui/react-components'
import envelopeImg from '../assets/images/envelope.png'
import waxSealImg from '../assets/images/wax_seal.png'
import carrotsImg from '../assets/images/carrots.png'
import flowerImg from '../assets/images/flowers.png'
import gardenGateImg from '../assets/images/garden_gate.png'
import bunnyFootprintImg from '../assets/images/bunny_footprint.png'
import '@fontsource/great-vibes'
import '@fontsource/dancing-script'

export function Invitation() {
  const navigate = useNavigate()

  return (
    <main className="invitation-shell">
      <section aria-labelledby="invitation-title">
        <div
          style={{
            width: '737.153px',
            height: '464.406px',
            transform: 'translate(79.7649px, 93.5011px) rotate(177.675deg)',
          }}
        >
          <img src={envelopeImg} alt="Envelope" />
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            transform: 'translate(13rem, -18rem)',
            width: '30rem',
          }}
        >
          <Text
            style={{
              fontSize: '6rem',
              fontFamily: "'cursive-font', cursive",
              paddingLeft: '2rem',
            }}
          >
            You're Invited
          </Text>
        </div>

        <button
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            textAlign: 'left',
          }}
          type="button"
          onClick={() => navigate('/details')}
          aria-label="Open invitation details"
        >
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              transform: 'translate(23.5rem, -8rem)',
              width: '100px',
            }}
          >
            <Text
              style={{
                fontSize: '1.8rem',
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              Click
            </Text>
            <br />
            <Text
              style={{
                fontSize: '1.8rem',
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              to open
            </Text>
          </div>
          <div style={{ position: 'relative', bottom: '15em', left: '27em' }}>
            <img
              style={{ width: '100px', height: '100px' }}
              src={waxSealImg}
              alt="Wax Seal"
            />
          </div>
        </button>
      </section>
      <section className="invitation-decorations">
        <div style={{ position: 'relative' }}>
          <img
            style={{
              position: 'absolute',
              transform: 'translate(43.5rem, -35.5rem) scaleX(-1) rotate(0deg)',
              width: '225px',
            }}
            src={carrotsImg}
            alt="Carrots"
          />
          <img
            style={{
              position: 'absolute',
              transform: 'translate(-2rem, -15rem)',
              width: '202px',
            }}
            src={flowerImg}
            alt="Flower"
          />
          <img
            style={{
              position: 'absolute',
              transform: 'translate(43rem, -18rem)',
              width: '240px',
            }}
            src={gardenGateImg}
            alt="Garden Gate"
          />
          <img
            style={{
              position: 'absolute',
              transform: 'translate(30rem, -9rem) rotate(18deg)',
              width: '35px',
            }}
            src={bunnyFootprintImg}
            alt="Bunny Footprint Top Left"
          />
          <img
            style={{
              position: 'absolute',
              transform: 'translate(32.5rem, -8rem) rotate(18deg)',
              width: '35px',
            }}
            src={bunnyFootprintImg}
            alt="Bunny Footprint Top Right"
          />
          <img
            style={{
              position: 'absolute',
              transform: 'translate(28.5rem, -6rem) rotate(18deg)',
              width: '48px',
            }}
            src={bunnyFootprintImg}
            alt="Bunny Footprint Bottom Left"
          />
          <img
            style={{
              position: 'absolute',
              transform: 'translate(31.5rem, -5.5rem) rotate(18deg)',
              width: '48px',
            }}
            src={bunnyFootprintImg}
            alt="Bunny Footprint Bottom Right"
          />
        </div>
      </section>
    </main>
  )
}
