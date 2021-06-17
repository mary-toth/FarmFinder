import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="hero">
        <h1>Welcome to Farm Finder</h1>

        <h2>Support Local Farmers in Your Area Today</h2>
        <button className="home">
          <Link to="/farms">Find a Farm Near Me</Link>
        </button>
      </div>
      <div className="body">
        <h2>Who are we?</h2>
        <div className="bodyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
        <h3>
          Farm Finder connects you to 42 farms in the Tampa/St. Pete area.
        </h3>
      </div>
    </>
  )
}
