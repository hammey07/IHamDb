import logoFile from "../IHamDb.png";
export function Logo() {
  return (
    <div className="logo">
      <span role="img">
        <img src={logoFile} alt="IHamDb Logo" />
      </span>
    </div>
  );
}
