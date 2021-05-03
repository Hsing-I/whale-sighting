import './Header.scss';

export default function Header() {
  return (
    <div class="image-container">
      <img className="image-container__img" src="/images/header.jpeg" />
      <div className="image-container__description">DISCLAIMER: Information Displayed On This Website Retrieved From The Whale Hotline API</div>
    </div>
  );
}