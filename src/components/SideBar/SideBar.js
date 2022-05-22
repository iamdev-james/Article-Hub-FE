import { Component } from "react";

class SideBar extends Component {
  render () {
    return (
      <div className="pt-40 px-10">
        <div>
          <p className="text-xl py-6">Categories</p>
          <ul>
            <li>Categories</li>
            <li>Categories</li>
            <li>Categories</li>
            <li>Categories</li>
            <li>Categories</li>
          </ul>
        </div>
        <div>
        <p className="text-xl py-16">Authors</p>
          <div>
            <p>Authors</p>
            <p>Authors</p>
            <p>Authors</p>
            <p>Authors</p>
            <p>Authors</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar