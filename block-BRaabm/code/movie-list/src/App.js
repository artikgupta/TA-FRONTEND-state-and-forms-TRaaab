import React from "react";
import data from "./data.json";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      data: null,
    };
  }

  handleModal = (data) => {
    this.setState({
      active: true,
      data,
    });
  };

  render() {
    return (
      <>
        <div className="box">
          {data.map((movie) => {
            console.log(movie);
            return (
              <>
                <div className="card">
                  <h1>{movie.Title}</h1>
                  <img src={movie.Images} width="200px" />
                  <p>{movie.Released}</p>
                  <button
                    className="btn"
                    onClick={() => this.handleModal(movie)}
                  >
                    Read More
                  </button>
                </div>
              </>
            );
          })}
        </div>

        {this.state.active ? (
          <Modal
            data={this.state.data}
            state={this.state}
            setState={this.setState.bind(this)}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

function Modal({ data, state, setState }) {
  return (
    <div className="modal">
      <h2>{data.Title}</h2>
      <p>{data.Type}</p>
      <p>{data.Writer}</p>
      <p>{data.Year}</p>
      <p>{data.imdbID}</p>
      <p>{data.imdbRating}</p>
      <p>{data.imdbVotes}</p>
      <p>{data.totalSeasons}</p>
      <button
        onClick={() =>
          setState({
            active: false,
            data: null,
          })
        }
      >
        X
      </button>
    </div>
  );
}

export default App;
