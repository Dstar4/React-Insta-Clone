import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './SearchBar.css';
export default class SearchBar extends React.Component {
  render() {
    return (
      <section className="search-bar">
        <Nav>
          <NavItem>
            <NavLink href="#">
              <i class="fab fa-instagram" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="instagram-link">
              Instagram
            </NavLink>
          </NavItem>
          <input
            type="text"
            name="search"
            placeholder=" Search.."
            className="search"
          />
          <NavItem>
            <NavLink href="#">
              <i class="far fa-compass" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <i class="far fa-heart" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <i class="far fa-user" />
            </NavLink>
          </NavItem>
        </Nav>
      </section>
    );
  }
}
