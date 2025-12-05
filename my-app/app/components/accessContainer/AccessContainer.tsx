type AccessCardProps = {
  imgSrc: string;
  title: string;
  description: string;
};

export default function AccessContainer({ imgSrc = '', title = '', description = '' }: AccessCardProps) {
  return (
    <div className="access-card-container">
      {imgSrc && <img src={`${imgSrc}`} className="access-card-img" />}
      <p className='access-card-title'>{title}</p>
      <p className='access-card-description'>{description}</p>
      <button className='access-card-button'><img src='/send.svg'/></button>
    </div>
  );
}