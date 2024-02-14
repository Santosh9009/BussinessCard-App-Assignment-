import PropTypes from 'prop-types';

function Cards({ cards }) {
  return (
    <div className='w-full flex text-white font-mono'>
      {cards && cards.map((element, index) => (
        <div className='flex flex-col gap-5 bg-[#201E1F] mr-8 p-6 pr-32 rounded' key={index}>
          <h1 className='text-xl font-semibold'>{element.name}</h1>
          <p className='font-medium'>{element.description}</p>
          <ul>
            <h2 className='mb-2 font-semibold'>Interests:</h2>
            {element.interest && element.interest.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
      <a href={element.linkedin} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          LinkedIn
        </button>
      </a>
      <a href={element.twitter} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Twitter
        </button>
      </a>
    </div>
        </div>
      ))}
    </div>
  );
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      interest: PropTypes.arrayOf(PropTypes.string).isRequired,
      linkedin: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Cards;
