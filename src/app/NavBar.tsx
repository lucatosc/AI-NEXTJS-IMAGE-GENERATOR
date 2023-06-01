'use client';

import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg='primary'
      variant='dark'
      sticky='top'
      expand='sm'
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href='/'>
          Home Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} href='/about' active={pathname === '/about'}>
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              href='/dynamic'
              active={pathname === '/dynamic'}
            >
              Dynamic
            </Nav.Link>
            <Nav.Link
              as={Link}
              href='/privacy'
              active={pathname === '/privacy'}
            >
              Privacy
            </Nav.Link>
            <Nav.Link
              as={Link}
              href='/contact'
              active={pathname === '/contact'}
            >
              Contact
            </Nav.Link>
            <NavDropdown title='Topics' id='topic-dropdown'>
              <NavDropdown.Item as={Link} href='/topics/health'>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href='/topics/fitness'>
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href='/topics/coding'>
                Coding
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
