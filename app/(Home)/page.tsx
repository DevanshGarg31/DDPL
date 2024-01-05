import Image from 'next/image'
import Slider from './components/Slider'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'

export default function Home() {
  return (
    <main className="">

      <Slider />
      <WhoWeAre />
      <Services />

    </main>
  )
}
