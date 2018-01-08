import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium, { StyleRoot } from 'radium';
import { flash } from 'react-animations';

const styles = {
  flash: {
    animation: 'x .7s',
    animationName: Radium.keyframes(flash, 'flash')
  }
};

class HistoryCard extends Component {
  render() {
    const historyList = this.props.historyList
      .map(item => (
        <tr key={item.key} style={styles.flash}>
          <td className='alegreya-font pt-0 pr-3 pb-0 pl-3'>
            <StyleRoot style={styles.flash}>
              {item.city.toUpperCase()}
            </StyleRoot>
          </td>
          <td className='pt-0 pr-3 pb-0 pl-3'>
            <StyleRoot style={styles.flash}>
              <p className='roboto-font text-right font-weight-light m-0'>
                {item.date}
              </p>
            </StyleRoot>
            <StyleRoot style={styles.flash}>
              <p className='text-right alegreya-font font-weight-light m-0'>
                {item.timeVisited}
              </p>
            </StyleRoot>
          </td>
        </tr>
      ))
      .reverse();

    return (
      <div className='card mb-3 col-lg-6 margin-15-px-padding-0-px p-0'>
        <div className='card-header roboto-font text-center'>
          SEARCH HISTORY
        </div>
        <div className='card-body p-0'>
          <table className='table table-striped'>
            <thead />
            <tbody className='card-text'>
              {this.props.empty ? (
                <tr>
                  <td>
                    <p className='text-center roboto-font text-muted padding-top-5-px m-0'>
                      Search history will appear here.
                    </p>
                  </td>
                </tr>
              ) : (
                historyList
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { empty: state.history.empty, historyList: state.history.historyList };
}
export default connect(mapStateToProps)(HistoryCard);
