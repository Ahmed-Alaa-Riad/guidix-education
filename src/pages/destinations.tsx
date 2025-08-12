const countries = ["USA", "UK", "Canada" /* ...all 22 */];

export default function Destinations() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {countries.map((country) => (
        <div
          key={country}
          className="p-4 bg-gray-100 rounded shadow cursor-pointer hover:scale-105"
        >
          {country}
        </div>
      ))}
    </div>
  );
}
