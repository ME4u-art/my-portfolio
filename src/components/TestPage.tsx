export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#071018',
      padding: '20px',
      color: 'white'
    }}>
      <h1>Image-in-Text Test Page</h1>
      
      {/* Test 1: Direct image display */}
      <div style={{ margin: '40px 0' }}>
        <h3>1. Testing if image loads:</h3>
        <div style={{
          width: '300px',
          height: '300px',
          background: `url('/profile.jpg') center/cover no-repeat`,
          border: '3px solid lime',
          margin: '20px 0'
        }}></div>
        <p>If you see your image above, the path is correct.</p>
        <a 
          href="/profile.jpg" 
          target="_blank"
          style={{ color: 'cyan' }}
        >
          Open image directly
        </a>
      </div>

      {/* Test 2: Gradient text clip */}
      <div style={{ margin: '40px 0' }}>
        <h3>2. Testing text clip with gradient:</h3>
        <h2 style={{
          fontSize: '4rem',
          fontWeight: 900,
          background: 'linear-gradient(45deg, red, blue)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent'
        }}>
          GRADIENT WORKS
        </h2>
      </div>

      {/* Test 3: Image text clip */}
      <div style={{ margin: '40px 0' }}>
        <h3>3. Testing image in text:</h3>
        <h2 style={{
          fontSize: '4rem',
          fontWeight: 900,
          background: `url('/profile.jpg') center/cover no-repeat`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          border: '2px solid yellow'
        }}>
          IMAGE TEXT
        </h2>
      </div>
    </div>
  );
}