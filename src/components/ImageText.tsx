import './profile.css';

export default function ImageText() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#071018'
    }}>
      <h1 style={{
        fontSize: '10rem',
        fontWeight: 900,
        backgroundImage: 'url(../assets/profile.jpg)',
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        HICHAM
      </h1>
    </div>
  );
}