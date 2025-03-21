export default function Map() {
  return (
    <div className="relative flex flex-col mt-[60px] gap-5 items-start justify-start font-satoshi">
      <img src="/assets/images/map_view.png" className="w-full xl:h-[800px] h-[500px]" alt="Map View" />
      
      {/* Markers */}
      <img src="/assets/images/map_view_marker.png" className="absolute top-[30%] left-[40%] w-15 h-15" alt="Marker 1" />
      <img src="/assets/images/map_view_marker.png" className="absolute top-[40%] left-[50%] w-15 h-15" alt="Marker 2" />
      <img src="/assets/images/map_view_marker.png" className="absolute top-[50%] left-[40%] w-15 h-15" alt="Marker 3" />
      <img src="/assets/images/map_view_marker.png" className="absolute top-[60%] left-[55%] w-15 h-15" alt="Marker 4" />
      
      <div className="absolute top-0 right-0 h-full xl:w-2/6 w-4/6 bg-black bg-opacity-60 p-6 flex flex-col gap-6 text-white">
        {/* Pickup Address */}
        <div className="text-lg">
          <p className="font-bold">Pickup Location</p>
          <p>123 Main Street, City, Country - Near Central Park, Opposite Metro Station</p>
        </div>

        {/* Button */}
        <button className="bg-purple-400 hover:bg-purple-500 text-white py-3 px-6 rounded-lg w-48">
          Add Shift
        </button>

        {/* Drop-off Address */}
        <div className="text-lg">
          <p className="font-bold">Drop-off Location</p>
          <p>456 Elm Street, City, Country - Close to Riverbank Mall, Beside Gas Station</p>
        </div>

        {/* Extra Button */}
        <button className="bg-purple-400 hover:bg-purple-500 text-white py-3 px-6 rounded-lg w-48">
          Add Stop
        </button>
      </div>
    </div>
  );
}
