import Home from "./Pages/Home";
import { Component } from "react";
import Spinner from "./components/Spinner";
class App extends Component {
    handleData = (e) => {
        e.preventDefault();
        const name = e.target.eatItem.value;
        const data = name.split(",");
        if (name === "") {
            alert("Please Enter Data First");
        } else if (data.length <= 3) {
            alert("enjoy");
        } else if (data.length === 4) {
            alert("careful");
        } else if (data.length >= 5) {
            alert("Too Much");
        } else {
            alert("Something Wrong");
        }
    };
    render() {
        return (
            <div>
                <Home />
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        paddingTop: "120px",
                    }}
                >
                    <form onSubmit={this.handleData}>
                        <div class="form-group">
                            <label for="formGroupExampleInput">
                                <h4> Enter what you want to eat for lunch</h4>
                            </label>
                            <input
                                type="text"
                                name="eatItem"
                                class="form-control"
                                id="formGroupExampleInput"
                                placeholder="Plese use , Seperated Value"
                            />
                        </div>
                        <button className="btn btn-primary">
                            Check If Too Much
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
