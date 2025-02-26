import { FC } from "react";
import Template from "../../layouts/Template";

const Artists: FC = () => {
  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        <h1>Artists</h1>
      </div>
    </Template>
  );
};

export default Artists;
