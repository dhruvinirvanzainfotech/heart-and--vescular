import Locations from '../components/Locations'

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="py-10 text-center bg-white border-b border-slate-100">
        <h1 className="text-3xl font-light text-slate-700 tracking-widest animate-titleIn">Our Locations</h1>
        <div className="w-12 h-[2px] bg-[#00bcd4] mx-auto mt-2" />
      </div>
      <div className="py-8">
        <Locations />
      </div>
    </div>
  )
}
