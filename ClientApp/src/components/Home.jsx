import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <div className="all">
        <div className="hero">
          <h1>Welcome to Farm Finder</h1>

          <h2 className="support">Support Local Farmers in Your Area Today</h2>
          <button className="home">
            <Link to="/farms">Find a Farm Near Me</Link>
          </button>
        </div>

        <div className="body">
          <section className="body">
            <h2 className="who-are-we">Who are we?</h2>
            Farm Finder was inspired by a desire to make finding fresh, local
            produce an easier process. By supporting local farms, you’re
            supporting families, healthier food, and farming practices that
            benefit the environment. Thanks to Farm Finder, you can find exactly
            what you're looking for in just a few clicks.
            <h3 className="who-are-we">
              Start searching for farms in your area today!{' '}
            </h3>
          </section>
        </div>
      </div>
    </>
  )
}
