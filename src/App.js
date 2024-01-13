import LISTINGS from "./data.json";

function App() {
  return (
    <>
      <div id="bg-header" className="bg-header"></div>
      <Main />
    </>
  );
}

function Main() {
  return (
    <div id="main" className="main">
      {LISTINGS.map((listing) => {
        return (
          <Listing
            key={`listing-${listing.id}`}
            id={listing.id}
            company={listing.company}
            logo={listing.logo}
            job={listing.position}
            role={listing.role}
            level={listing.level}
            postedAt={listing.postedAt}
            contract={listing.contract}
            location={listing.location}
            languages={listing.languages}
            tools={listing.tools}
            isNew={listing.new}
            isFeatured={listing.featured}
          />
        );
      })}
    </div>
  );
}

function Listing({
  id,
  company,
  logo,
  job,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  isNew,
  isFeatured,
}) {
  return (
    <div className="listing-container">
      <div
        className={
          isFeatured
            ? "listing-featured-bar"
            : "listing-featured-bar listing-featured-bar-hidden"
        }
      ></div>
      <div id={`listing-${id}`} className="listing">
        <div id={`logo-container-${id}`} className="logo-container">
          <img alt="" src={logo} width="60px" height="60px"></img>
        </div>
        <Description
          id={id}
          company={company}
          isNew={isNew}
          isFeatured={isFeatured}
          job={job}
          postedAt={postedAt}
          contract={contract}
          location={location}
        />
        <Skills
          id={id}
          role={role}
          level={level}
          languages={languages}
          tools={tools}
        />
      </div>
    </div>
  );
}

function Skills({ id, role, level, languages, tools }) {
  const skills = [role, level, ...languages, ...tools];
  return (
    <>
      <div id={`skills-container-${id}`} className="skills-container">
        {skills.map((skill, index) => {
          return (
            <span key={`listing-${id}-skill-${index + 1}`} className="skill">
              {skill}
            </span>
          );
        })}
      </div>
    </>
  );
}

function Description({
  id,
  company,
  isNew,
  isFeatured,
  job,
  postedAt,
  contract,
  location,
}) {
  return (
    <>
      <div id={`description-container-${id}`} className="description-container">
        <DescTopRow
          id={id}
          company={company}
          isNew={isNew}
          isFeatured={isFeatured}
        />
        <div id={`description-middle-row-${id}`}>{job}</div>
        <DescBottomRow
          id={id}
          postedAt={postedAt}
          contract={contract}
          location={location}
        />
      </div>
    </>
  );
}

function DescTopRow({ id, company, isNew, isFeatured }) {
  return (
    <div id={`description-top-row-${id}`} className="description-top-row">
      <div id={`company-${id}`} className="company-name">
        {company}
      </div>
      <div id={`new-featured-${id}`} className="new-featured">
        <button
          id={`new-${id}`}
          className={isNew ? "btn-small btn-new" : "hidden"}
        >
          NEW!
        </button>
        <button
          id={`featured-${id}`}
          className={isFeatured ? "btn-small btn-featured" : "hidden"}
        >
          FEATURED
        </button>
      </div>
    </div>
  );
}

function DescBottomRow({ id, postedAt, contract, location }) {
  return (
    <div id={`description-bottom-row-${id}`}>
      <span
        id={`listing-${id}-posted-at`}
        className="description-bottom-row-info"
      >
        {postedAt}
      </span>
      <span className="description-bottom-row-info">&bull;</span>
      <span
        id={`listing-${id}-contract`}
        className="description-bottom-row-info"
      >
        {contract}
      </span>
      <span className="description-bottom-row-info">&bull;</span>
      <span
        id={`listing-${id}-location`}
        className="description-bottom-row-info"
      >
        {location}
      </span>
    </div>
  );
}

export default App;
