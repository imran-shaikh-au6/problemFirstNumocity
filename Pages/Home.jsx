import React from "react";

export default function Home() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Numocity</a>
                <form class="form-inline">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </nav>
        </div>
    );
}