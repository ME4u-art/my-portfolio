import './profile.css';

function ProfileImage() {
  const name = "HICHAM";

  return (
    <div className="full-image-text-container">
      <h1 className="full-image-text">
        {name.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </div>
  );
}

export default ProfileImage;