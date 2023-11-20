interface CardProps {
  key:string;
  name: string;
  excerpt: string;
}

const Card = (props: {key: string, title: string, excerpt: string }) => (
  <div className="md max-w p-4 border " >
    <div className="p-6">
      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{props.title}</h2>
      <p className="prose text-m mb-3 max-w-none text-gray-500 dark:text-gray-400">{props.excerpt}</p>
    </div>
  </div>
);

export default Card;
