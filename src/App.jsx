import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink,
} from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="bg-white py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl montserrat font-bold text-blue-500">Bookstore CMS</h1>
          <nav className="ml-6">
            <NavLink to="/" exact="true" activeclassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase">
              Home
            </NavLink>
            <NavLink to="/missions" exact="true" activexlassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
              Missions
            </NavLink>
            <NavLink to="/rockets" exact="true" activeclassname="active" className="montserrat text-black text-sm font-medium tracking-wide uppercase ml-4">
              Rockets
            </NavLink>
          </nav>
        </div>
        <NavLink to="/my-profile" exact="true" activeclassname="active" className="profile">
          <figure className="flex items-center justify-center ml-auto">
            <div className="bg-white border border-solid border-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-azure-500 text-xl">&#128100;</span>
            </div>
          </figure>
        </NavLink>
      </header>
      <div className="not-navbar"><Outlet /></div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <div>
                Route by default
              </div>
            )}
          />
          <Route path="rockets" element={<div>rockets router</div>} />
          <Route path="missions" element={<div>missions router</div>} />
          <Route path="my-profile" element={<div>Profile</div>} />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
