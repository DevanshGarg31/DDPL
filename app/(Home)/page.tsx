import Image from 'next/image'
import Slider from './components/Slider'
import WhoWeAre from './components/WhoWeAre'
import Services from './components/Services'
import InfinitStrip from './components/InfiniteStrip'
import Aesthetics from './components/Aesthetics'

export default function Home() {
  return (
    <main className="">

      <Slider />
      <WhoWeAre />
      <InfinitStrip />
      <Services />
      <Aesthetics />

    </main>
  )
}
