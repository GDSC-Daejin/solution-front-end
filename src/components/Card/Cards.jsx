import {Card, CardHeader, CardBody, Image} from '@nextui-org/react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Cards = ({title, due, location, img, id }) => {


  return (
    <Card className="py-4" isPressable>
      <Link to={`/recruit/detail/${id}`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-sm font-bold uppercase  mb-2">{location}</p>
        <small className="text-default-500 mb-6">{due}</small>
        <h4 className="font-bold text-left">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex justify-center items-center ">
        <div className="w-49 h-32 flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl ml-1 mt-6 w-50 h-20"
          src={img}
          width={180}
        />
        </div>
      </CardBody>
      </Link>
    </Card>
  );
}

export default Cards;