import { useState, useEffect, useRef } from "react";

const ApiShowcase = () => {
  const [activeService, setActiveService] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const preRef = useRef(null);

  const services = [
    {
      id: 1,
      name: "Quran API",
      url: "https://quran.ngacir.my.id/api/surat",
    },
    {
      id: 2,
      name: "Sales Api",
      url: "https://api-sales.ngacir.my.id/api/sales",
    },
    {
      id: 3,
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

  // Scroll ke atas ketika data baru dimuat
  useEffect(() => {
    if (jsonData && preRef.current) {
      preRef.current.scrollTop = 0;
    }
  }, [jsonData]);

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
<p className="text-gray-500 text-sm md:text-base mt-2 px-2">
            Klik Ulang kembali jika terjadi error
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

        {/* Output JSON dengan fixed height dan scroll */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-sm text-gray-600 font-medium">
              Response JSON
            </span>
            {jsonData && !loading && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {Object.keys(jsonData).length} properti
              </span>
            )}
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
            <div 
              ref={preRef}
              className="h-[400px] md:h-[500px] overflow-auto p-4 md:p-6"
            >
              {loading && (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mb-2"></div>
                    <p className="text-gray-500">Mengambil data...</p>
                  </div>
                </div>
              )}

              {!loading && jsonData && (
                <pre className="text-xs md:text-sm text-gray-800 font-mono leading-relaxed">
                  {JSON.stringify(jsonData, null, 2)}
                </pre>
              )}

              {!loading && !jsonData && (
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <div className="text-gray-300 mb-3">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">
                    Klik salah satu layanan di atas untuk melihat data JSON
                  </p>
                  <p className="text-gray-300 text-xs mt-1">
                    Response akan ditampilkan di area ini
                  </p>
                </div>
              )}
            </div>

            {/* Scroll indicator (opsional) */}
            {jsonData && !loading && (
              <div className="border-t border-gray-200 bg-gray-100 px-4 py-2 flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Scroll untuk melihat lebih banyak
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Petunjuk penggunaan */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
            <span className="font-medium">Tip:</span> Gunakan scroll untuk navigasi response yang panjang
          </div>
          <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
            <span className="font-medium">Ctrl+F</span> untuk mencari dalam JSON
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiShowcase;