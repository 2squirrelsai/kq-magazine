import Cover from './sections/Cover'
import Toc from './sections/Toc'
import EditorLetter from './sections/EditorLetter'
import TruckstopDiaries from './sections/TruckstopDiaries'
import HouseDressFashion from './sections/HouseDressFashion'
import MiniKraigCatalog from './sections/MiniKraigCatalog'
import BillsCheer from './sections/BillsCheer'
import FakeAds from './sections/FakeAds'
import AdviceHoroscope from './sections/AdviceHoroscope'
import Centerfolds from './sections/Centerfolds'
import BackMatter from './sections/BackMatter'
import NavDots from './components/NavDots'

const SECTIONS = [
  'cover',
  'toc',
  'editor',
  'truckstop',
  'fashion',
  'minis',
  'sports',
  'ads',
  'advice',
  'centerfolds',
  'back',
]

export default function App() {
  return (
    <>
      <NavDots ids={SECTIONS} />
      <main className="magazine">
        <Cover />
        <Toc />
        <EditorLetter />
        <TruckstopDiaries />
        <HouseDressFashion />
        <MiniKraigCatalog />
        <BillsCheer />
        <FakeAds />
        <AdviceHoroscope />
        <Centerfolds />
        <BackMatter />
      </main>
    </>
  )
}
