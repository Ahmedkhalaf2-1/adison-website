import bg from "../../assets/kh2.jpg";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <img
        src={bg}
        alt="background"
        className="h-full w-full object-cover"
      />
    </div>
  );
}