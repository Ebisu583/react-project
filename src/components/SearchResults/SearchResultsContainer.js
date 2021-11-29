import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchResults = props.match.params.searchResults;
  return {cards: getCardsForSearchResults(state, searchResults)};
};

export default connect(mapStateToProps)(SearchResults);