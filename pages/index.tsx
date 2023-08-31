import type { NextPage, NextPageContext } from 'next';
import CurrentDay from '../components/CurrentDay';
import Week from '../components/Week';
import weather from '../lib/weather';

export async function getServerSideProps() {
  const { newObj: data } = await weather();
  return {
    props: { data },
  };
}

const Home: NextPage = ({ data }) => {
  console.log(data);
  return (
    <div
      className="relative
        px-2 y-2 h-full w-full flex flex-row items-center justify-center">
      <div className=" p-5  flex flex-col items-center h-full w-full sm:h-auto sm:w-auto">
        <CurrentDay current={data.current} />
        <Week week={data.week} />
      </div>
    </div>
  );
};

export default Home;
