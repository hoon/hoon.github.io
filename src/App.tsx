import './App.css'

function App() {
  return (
    <>
      <div className="block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 text-left">
          Useful tools
        </h2>
        <a
          href="/dairy/"
          className="block p-4 max-w-sm rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-left">
            Canada Dairy Establishment Search
          </h5>
          <p className="font-normal text-gray-700 text-left">
            Ever wondered who actually makes your grocery store's house brand
            butter, cheese, yogurt, or milk? Find out with this search tool.
          </p>
        </a>
      </div>
    </>
  )
}

export default App
