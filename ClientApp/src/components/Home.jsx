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
            produce an easier process. By supporting local farms, you are:
            <section className="list-of-things">
              <p>
                -Protecting the environment. Food in the U.S. travels an average
                of 1,500 miles to get to your plate- that’s a lot, and this
                shipping contributes significantly to fossil fuel usage and
                pollution. Local farm food is transported shorter distances and
                has a far better impact on the earth.{' '}
              </p>
              <p>-Supporting local families</p>
              <p>
                -Eating healthier food! So much of the food found in grocery
                stores is highly processed and grown using harsh pesticides, and
                the meat is often full of hormones and antibiotics.{' '}
              </p>
            </section>
            <h3 className="who-are-we">
              Farm Finder connects you to 42 farms in the Tampa/St. Pete area.
            </h3>
          </section>
        </div>
      </div>
    </>
  )
}
