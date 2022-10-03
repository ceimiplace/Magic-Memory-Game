export default function CardComponent({ card, id, src, handleClick }) {
  return (
    <div>
      <img src={src} alt="card-image" />
      <img src="/img/cover.png" onClick={() => handleClick(card)} />
    </div>
  );
}
