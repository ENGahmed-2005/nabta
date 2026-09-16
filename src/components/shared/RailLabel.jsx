import { useApp } from "../../context/AppContext.jsx";

export default function RailLabel() {
  const { isArabic } = useApp();
  return (
    <div className="rail" aria-hidden="true">
      <span>{isArabic ? "نبطة — أفكار. كود. أثر." : "NABTA — Ideas. Code. Impact."}</span>
      <span className="rail-dash" />
    </div>
  );
}
