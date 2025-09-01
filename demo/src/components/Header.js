import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/user-types', label: 'User Profiles', icon: '👥' },
    { path: '/fraud-types', label: 'Fraud Types', icon: '🚨' },
    { path: '/quiz', label: 'Security Quiz', icon: '🧠' },
    { path: '/resources', label: 'Resources', icon: '📚' }
  ];

  return (
    <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`} style={{
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 4px 16px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="nav-container">
        <Link to="/" className="logo" style={{
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none'
        }}>
          <span style={{ fontSize: '1.8rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>🛡️</span>
          <span style={{ 
            fontWeight: '800',
            fontSize: '1.8rem',
            letterSpacing: '-0.5px'
          }}>
            CyberShield
          </span>
          <span style={{ 
            fontSize: '0.75rem', 
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '12px',
            marginLeft: '12px',
            fontWeight: '700',
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
          }}>
            INDIA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links" style={{
            display: 'flex',
            gap: '8px',
            listStyle: 'none',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    color: location.pathname === item.path ? '#2563eb' : '#374151',
                    background: location.pathname === item.path 
                      ? 'rgba(37, 99, 235, 0.1)' 
                      : 'transparent',
                    border: location.pathname === item.path 
                      ? '2px solid rgba(37, 99, 235, 0.2)' 
                      : '2px solid transparent',
                    boxShadow: location.pathname === item.path 
                      ? '0 4px 12px rgba(37, 99, 235, 0.15)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'rgba(37, 99, 235, 0.05)';
                      e.target.style.color = '#2563eb';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#374151';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'rgba(37, 99, 235, 0.1)',
            border: '2px solid rgba(37, 99, 235, 0.2)',
            borderRadius: '12px',
            color: '#2563eb',
            padding: '12px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Emergency Button */}
        <a 
          href="tel:1930" 
          className="btn btn-danger emergency-btn"
          style={{ 
            padding: '12px 20px',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '700',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
            border: 'none',
            transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';
          }}
        >
          🚨 Emergency: 1930
        </a>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className="mobile-menu"
        style={{
          display: isMenuOpen ? 'block' : 'none',
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          background: 'rgba(31, 41, 55, 0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '20px',
          zIndex: 1000
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.path} style={{ marginBottom: '12px' }}>
              <Link 
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  background: location.pathname === item.path ? 'rgba(37, 99, 235, 0.2)' : 'transparent',
                  border: location.pathname === item.path ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </Link>
            </li>
          ))}
          
          {/* Mobile Emergency Section */}
          <li style={{ 
            marginTop: '20px', 
            padding: '16px', 
            background: 'rgba(220, 38, 38, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(220, 38, 38, 0.3)'
          }}>
            <div style={{ marginBottom: '12px', color: '#fca5a5', fontWeight: '600' }}>
              🚨 Emergency Contacts
            </div>
            <div style={{ display: 'grid', gap: '8px' }}>
              <a href="tel:1930" style={{ color: 'white', textDecoration: 'none' }}>
                📞 Cyber Crime: 1930
              </a>
              <a href="tel:155260" style={{ color: 'white', textDecoration: 'none' }}>
                💰 Financial Fraud: 155260
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-overlay"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .nav-container .btn {
            padding: 6px 12px;
            fontSize: 0.8rem;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
