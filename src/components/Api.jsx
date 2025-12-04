import { useState } from "react";

const ApiShowcase = () => {
  const [activeService, setActiveService] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 1,
      name: "Quran API",
      url: "https://quran.ngacir.my.id/api/surat",
    },
    {
      id: 2,
      name: "Weather API",
      url: "https://api.open-meteo.com/v1/forecast?latitude=0&longitude=109&current_weather=true",
    },
  ];

  const fetchApi = async (service) => {
    try {
      setActiveService(service.id);
      setLoading(true);
      setJsonData(null);

      const res = await fetch(service.url);
      const data = await res.json();

      setJsonData(data);
    } catch (error) {
      setJsonData({ error: "Gagal mengambil data API" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-8 px-4 md:py-20 md:px-4 section-box mt-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Layanan Backend & API
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 px-2">
            Klik layanan untuk melihat response JSON secara langsung
          </p>
          <div className="w-16 md:w-24 h-1 bg-gray-900 mx-auto mt-3 md:mt-4 rounded-full"></div>
        </div>

        {/* List Layanan */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => fetchApi(service)}
              className={`border rounded-xl p-4 md:p-6 text-left transition-all w-full
                ${
                  activeService === service.id
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
            >
              <h3 className="text-lg md:text-xl font-semibold">{service.name}</h3>
              <p className="text-xs md:text-sm opacity-80 mt-1 truncate">
                {service.url}
              </p>
            </button>
          ))}
        </div>

        {/* Output JSON */}
        <div className="bg-gray-50 border rounded-xl p-4 md:p-6 min-h-[150px] md:min-h-[200px]">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-2"></div>
                <p className="text-gray-500">Mengambil data...</p>
              </div>
            </div>
          )}

          {!loading && jsonData && (
            <div className="overflow-hidden">
              <pre className="text-xs md:text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap break-words">
                {JSON.stringify(jsonData, null, 2)}
              </pre>
            </div>
          )}

          {!loading && !jsonData && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-center text-sm md:text-base px-2">
                Klik salah satu layanan untuk melihat data JSON
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApiShowcase;