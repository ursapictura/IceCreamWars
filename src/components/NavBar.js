'use client';

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { useAuth } from '@/utils/context/authContext';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { signOut } from '@/utils/auth';

export default function NavBar() {
  // const { user } = useAuth();
  return (
    <>
      <Navbar className="navBar" collapseOnSelect expand="lg" style={{ backgroundColor: '#BA8ECF' }}>
        <Container>
          <Link style={{ color: 'white', fontSize: '35px' }} passHref href="/" className="navbar-brand">
            Brain Freeze
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
              {
                <Link className="nav-link" href="/modal">
                  Modal
                </Link>
                /* <Link className="nav-link" href={`/response/${user.uid}?value=Yes`}>
                ✅ YES
              </Link>
              <Link className="nav-link" href={`/response/${user.uid}?value=No`}>
                ❌ NO
              </Link> */
              }
            </Nav>

            <Button variant="outline-light" size="lg" onClick={signOut}>
              Sign Out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="box" />
    </>
  );
}
