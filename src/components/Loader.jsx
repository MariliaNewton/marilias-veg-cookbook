import carrotUrl from "../assets/images/carrot.svg";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <img src={carrotUrl} alt="" />
      <div className="loader"></div>
    </div>
  );
}
