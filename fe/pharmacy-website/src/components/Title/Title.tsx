interface Props {
  title: string;
}
const Title = ({ title }: Props) => {
  return (
    <>
      <div className="h-10">
        <span className="text-2xl font-bold uppercase">{title}</span>
      </div>
    </>
  );
};

export default Title;
